import { TOMORROW_RELEASE_HOUR } from './constants.js';


/**
 * Checks if cached electricity price data is still fresh and valid.
 *
 * @param {string} key - The localStorage key ('electricityPrices_today' or 'electricityPrices_tomorrow').
 * @param {string} fetchedAtStr - ISO timestamp string indicating when the data was fetched.
 * @returns {boolean} - Returns true if the data is still considered fresh based on its key and timestamp.
 *
 * Freshness rules:
 * - For 'electricityPrices_today': valid if fetched on the current day.
 * - For 'electricityPrices_tomorrow': valid if fetched today after 14:00 (2 PM local time).
 */
export function isDataFresh(key, fetchedAtStr) {
  if (!fetchedAtStr) return false;

  const fetchedAt = new Date(fetchedAtStr);
  const now = new Date();

  const fetchedDay = fetchedAt.toISOString().slice(0, 10);
  const todayStr = now.toISOString().slice(0, 10);

  if (key === "electricityPrices_today") {
    return fetchedDay === todayStr;
  }

  if (key === "electricityPrices_tomorrow") {
    const hours = now.getHours();
    return fetchedDay === todayStr && hours >= TOMORROW_RELEASE_HOUR;
  }

  return false;
}

/**
 * Retrieves and validates cached electricity price data from localStorage.
 *
 * @param {string} key - The localStorage key to fetch ('electricityPrices_today' or 'electricityPrices_tomorrow').
 * @returns {Array|null} - Returns the cached data array if valid and fresh, otherwise returns null.
 *
 * The function:
 * 1. Reads from localStorage.
 * 2. Parses the JSON safely.
 * 3. Validates freshness using isDataFresh().
 * 4. Returns parsed data if valid, or null if expired or invalid.
 */
export function getCachedPrices(key) {
  const cached = localStorage.getItem(key);
  if (!cached) return null;

  try {
    const parsed = JSON.parse(cached);
    if (isDataFresh(key, parsed.fetchedAt)) {
      return parsed.data;
    }
  } catch (err) {
    console.error(`Error parsing cached data for ${key}`, err);
  }

  return null;
}

/**
 * Saves fresh electricity price data to localStorage.
 * @param {string} key - Storage key (e.g. 'electricityPrices_today')
 * @param {Array} data - Clean price data array
 */
export function saveToCache(key, data) {
  const payload = {
    fetchedAt: new Date().toISOString(),
    data: data,
  };
  localStorage.setItem(key, JSON.stringify(payload));
}
