import { LAMBDA_ENDPOINT } from './constants.js';
import { saveToCache } from './priceCache.js';


/**
 * Fetches electricity price data from the backend Lambda function.
 * Also saves the result to localStorage via `saveToCache`.
 *
 * @returns {Promise<{ today: Array, tomorrow: Array }>} - Price data or empty arrays if failed.
 */
export async function fetchElectricityPrices() {
  try {
    const response = await fetch(LAMBDA_ENDPOINT);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }

    const result = await response.json();

    // Save to localStorage
    if (result.today) {
      saveToCache('electricityPrices_today', result.today);
    }
    if (result.tomorrow) {
      saveToCache('electricityPrices_tomorrow', result.tomorrow);
    }

    return result;

  } catch (error) {
    console.error('Error fetching electricity prices:', error);
    return {
      today: [],
      tomorrow: []
    };
  }
}
