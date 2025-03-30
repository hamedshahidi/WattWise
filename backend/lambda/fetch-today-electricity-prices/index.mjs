import fetch from "node-fetch";

/**
 * AWS Lambda handler to fetch today's electricity spot prices.
 *
 * Fetches data from the `spot-hinta.fi/today` API and returns a simplified array
 * of { dateTime, price } objects. Even on error, the function returns a consistent
 * response shape with a "today" key (an array).
 *
 * @param {object} event - AWS Lambda event object (unused)
 * @returns {Promise<object>} - HTTP response with JSON body containing today's prices
 */
export const fetchTodayElectricityPrices = async (event) => {
  try {
    const response = await fetch("https://api.spot-hinta.fi/today");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const todayData = await response.json();

    const formatted = todayData.map((item) => ({
      dateTime: item.DateTime,
      price: item.PriceWithTax,
    }));

    return {
      statusCode: 200,
      body: JSON.stringify({ today: formatted }),
    };
  } catch (error) {
    console.error("❌ Error fetching today's electricity prices:", error);
    // Always return the same shape, even on error
    return {
      statusCode: 500,
      body: JSON.stringify({
        today: [],
        message: "Failed to fetch today's electricity prices",
        error: error.message,
      }),
    };
  }
};
