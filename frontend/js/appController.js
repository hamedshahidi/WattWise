import { CACHE_KEY_TODAY, CACHE_KEY_TOMORROW } from "./constants.js";
import { getCachedPrices, saveToCache } from "./priceCache.js";
import { fetchElectricityPrices } from "./priceFetcher.js";
import { renderPrices } from "./renderController.js";

/**
 * Initializes the app by loading price data (cached or remote),
 * then triggering UI rendering.
 */
export async function initApp() {
  let today = getCachedPrices(CACHE_KEY_TODAY);
  let tomorrow = getCachedPrices(CACHE_KEY_TOMORROW);

  if (today && tomorrow) {
    console.log("✅ Using cached price data");
    renderPrices({ today, tomorrow });
    return;
  }

  console.log("🔄 Fetching electricity prices from Lambda...");
  const fetched = await fetchElectricityPrices();

  // Merge with valid cached values to avoid overwriting good data
  if (!today && fetched.today) {
    today = fetched.today;
    saveToCache(CACHE_KEY_TODAY, today);
  }

  if (!tomorrow && fetched.tomorrow) {
    tomorrow = fetched.tomorrow;
    saveToCache(CACHE_KEY_TOMORROW, tomorrow);
  }

  renderPrices({ today, tomorrow });
}

window.addEventListener("DOMContentLoaded", initApp);
