import { TW_COLORS } from "./themeColors.js";

const Chart = window.Chart;

let priceChart = null;

/**
 * Renders the electricity price trend line chart.
 * @param {Array} prices - Array of { dateTime, price } objects
 * @param {string} canvasId - The ID of the canvas element
 */
export function renderPriceChart(prices, canvasId = "priceChart") {
  const ctx = document.getElementById(canvasId);
  if (!ctx) {
    console.warn(`Canvas with id "${canvasId}" not found`);
    return;
  }

  const labels = prices.map((p) => new Date(p.dateTime).getHours() + ":00");
  const data = prices.map((p) => p.price);

  if (priceChart) priceChart.destroy();

  priceChart = new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "Electricity Price (€/kWh)",
          data,
          borderColor: TW_COLORS.blue500,
          backgroundColor: "rgba(59, 130, 246, 0.2)", // translucent blue
          pointBackgroundColor: TW_COLORS.yellow400,
          pointBorderColor: TW_COLORS.white,
          pointRadius: 4,
          borderWidth: 2,
          tension: 0.3,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: TW_COLORS.white,
          },
        },
        tooltip: {
          backgroundColor: TW_COLORS.gray800,
          titleColor: TW_COLORS.yellow400,
          bodyColor: TW_COLORS.white,
        },
      },
      scales: {
        x: {
          ticks: {
            color: TW_COLORS.slate300,
          },
          grid: {
            color: "rgba(255, 255, 255, 0.05)",
          },
        },
        y: {
          beginAtZero: false,
          ticks: {
            color: TW_COLORS.slate300,
            callback: (val) => val.toFixed(3) + " €",
          },
          grid: {
            color: "rgba(255, 255, 255, 0.05)",
          },
        },
      },
    },
  });
}

/**
 * Renders the dishwasher program cost trend chart.
 * @param {Array} costData - Array of cost values per hour
 */
export function renderCostChart(costData, canvasId = "costChart") {
  // TODO: Implement cost chart rendering
  console.warn("renderCostChart is not yet implemented.");
}
