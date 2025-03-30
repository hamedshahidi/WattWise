import fetch from "node-fetch";

/**
 * AWS Lambda handler to fetch tomorrow's electricity spot prices.
 *
 * Fetches data from the `spot-hinta.fi/DayForward` API and returns a simplified array
 * of { dateTime, price } objects. Even on error or 404 (not yet available), the function
 * returns a consistent response shape with a "tomorrow" key.
 *
 * @param {object} event - AWS Lambda event object (unused)
 * @returns {Promise<object>} - HTTP response with JSON body containing tomorrow's prices
 */
export const fetchTomorrowElectricityPrices = async (event) => {
  try {
    const response = await fetch("https://api.spot-hinta.fi/DayForward");

    if (response.ok) {
      const tomorrowData = await response.json();

      const formatted = tomorrowData.map((item) => ({
        dateTime: item.DateTime,
        price: item.PriceWithTax,
      }));

      return {
        statusCode: 200,
        body: JSON.stringify({ tomorrow: formatted }),
      };
    } else if (response.status === 404) {
      // Tomorrow's prices not yet available (normal situation, not a failure)
      console.warn("⚠️ Tomorrow's electricity prices not yet available (404).");
      return {
        statusCode: 200,
        body: JSON.stringify({ tomorrow: [] }),
      };
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error("❌ Error fetching tomorrow's electricity prices:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        tomorrow: [],
        message: "Failed to fetch tomorrow's electricity prices",
        error: error.message,
      }),
    };
  }
};
