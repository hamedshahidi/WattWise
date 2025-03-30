import {
    CACHE_KEY_TODAY,
    CACHE_KEY_TOMORROW,
    LAMBDA_ENDPOINT_TODAY,
    LAMBDA_ENDPOINT_TOMORROW,
} from "./constants.js";
import { saveToCache } from "./priceCache.js";

/**
 * Wrapper to fetch both today's and tomorrow's electricity prices.
 * Internally calls the modular fetch functions in parallel.
 *
 * @returns {Promise<{ today: Array, tomorrow: Array }>}
 */
export async function fetchElectricityPrices() {
  try {
    const [today, tomorrow] = await Promise.all([
      fetchTodayPrices(),
      fetchTomorrowPrices(),
    ]);

    return { today, tomorrow };
  } catch (error) {
    console.error("❌ fetchElectricityPrices failed:", error);
    return { today: [], tomorrow: [] };
  }
}

/**
 * Fetches today's electricity price data from the Lambda endpoint.
 * Caches valid data and returns an array (empty if failed or malformed).
 *
 * @returns {Promise<Array>} An array of today's price objects.
 */
export async function fetchTodayPrices() {
  try {
    const response = await fetch(LAMBDA_ENDPOINT_TODAY);

    if (!response.ok) {
      console.warn(
        "⚠️ fetchTodayPrices: Lambda returned non-200 status",
        response.status
      );
      return [];
    }

    const data = await response.json();
    const today = Array.isArray(data.today) ? data.today : [];

    if (today.length) {
      saveToCache(CACHE_KEY_TODAY, today);
    }

    return today;
  } catch (error) {
    console.error("❌ fetchTodayPrices error:", error);
    return [];
  }
}

/**
 * Fetches tomorrow's electricity price data from the Lambda endpoint.
 * Caches valid data and returns an array (empty if not available or malformed).
 *
 * @returns {Promise<Array>} An array of tomorrow's price objects.
 */
export async function fetchTomorrowPrices() {
  try {
    const response = await fetch(LAMBDA_ENDPOINT_TOMORROW);

    if (!response.ok) {
      console.warn(
        "⚠️ fetchTomorrowPrices: Lambda returned non-200 status",
        response.status
      );
      return [];
    }

    const data = await response.json();
    const tomorrow = Array.isArray(data.tomorrow) ? data.tomorrow : [];

    if (tomorrow.length) {
      saveToCache(CACHE_KEY_TOMORROW, tomorrow);
    }

    return tomorrow;
  } catch (error) {
    console.error("❌ fetchTomorrowPrices error:", error);
    return [];
  }
}
