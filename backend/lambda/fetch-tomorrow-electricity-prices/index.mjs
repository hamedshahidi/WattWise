import fetch from "node-fetch";

/**
 * AWS Lambda handler to fetch tomorrow's electricity spot prices.
 *
 * Fetches data from the `spot-hinta.fi/DayForward` API and returns
 * a simplified array of { dateTime, price } objects.
 * Handles 404 if tomorrow's data isn't published yet.
 *
 * @param {object} event - AWS Lambda event object (unused)
 * @returns {Promise<object>} - HTTP response with JSON body containing tomorrow's prices
 */
export const fetchTomorrowElectricityPrices = async (event) => {
  try {
    const response = await fetch("https://api.spot-hinta.fi/DayForward");

    if (response.status === 404) {
      console.log("⏳ Tomorrow's data not yet available.");
      return {
        statusCode: 200,
        body: JSON.stringify({ tomorrow: [] }),
      };
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} for tomorrow`);
    }

    const tomorrowData = await response.json();

    const formatted = tomorrowData.map((item) => ({
      dateTime: item.DateTime,
      price: item.PriceWithTax,
    }));

    return {
      statusCode: 200,
      body: JSON.stringify({ tomorrow: formatted }),
    };
  } catch (error) {
    console.error("❌ Error fetching tomorrow's electricity prices:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Failed to fetch tomorrow's electricity prices",
        error: error.message,
      }),
    };
  }
};
