import { renderPriceChart } from "./chartController.js";

/**
 * Renders electricity price data to the UI.
 * Currently logs the data, will be extended to update DOM.
 *
 * @param {Object} data - Contains `today` and `tomorrow` arrays
 */
export function renderPrices(data) {
    console.log('⚡ Price Data:', data);
    renderPriceChart(data.today);
  }
