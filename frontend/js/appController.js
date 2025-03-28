import { CACHE_KEY_TODAY, CACHE_KEY_TOMORROW } from './constants.js';
import { getCachedPrices } from './priceCache.js';
import { fetchElectricityPrices } from './priceFetcher.js';

// import { renderPrices } from './renderController.js'; // placeholder

/**
 * Initializes the app by loading price data (cached or remote),
 * then triggering UI rendering.
 */
export async function initApp() {
  const today = getCachedPrices(CACHE_KEY_TODAY);
  const tomorrow = getCachedPrices(CACHE_KEY_TOMORROW);

  if (today && tomorrow) {
    console.log('✅ Using cached price data');
    renderPrices({ today, tomorrow });
  } else {
    console.log('🔄 Fetching electricity prices from Lambda...');
    const data = await fetchElectricityPrices();
    renderPrices(data);
  }
}

// Temporary mock rendering logic
function renderPrices(data) {
  console.log('⚡ Price Data:', data);
  // TODO: replace with actual UI update via renderController.js
}

// Run app on page load
window.addEventListener('DOMContentLoaded', initApp);
