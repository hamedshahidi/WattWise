import fetch from 'node-fetch';

export const fetchElectricityPrices = async (event) => {
  try {
    const todayResponse = await fetch('https://api.spot-hinta.fi/today');
    if (!todayResponse.ok) {
      throw new Error(`HTTP error! status: ${todayResponse.status} for today`);
    }
    const todayData = await todayResponse.json();

    let tomorrowData = [];
    try {
      const tomorrowResponse = await fetch('https://api.spot-hinta.fi/DayForward');
      if (tomorrowResponse.ok) {
        tomorrowData = await tomorrowResponse.json();
      } else if (tomorrowResponse.status === 404) {
        console.log("Tomorrow's data not yet available (404)");
        tomorrowData = [];
      } else {
        throw new Error(`HTTP error! status: ${tomorrowResponse.status} for tomorrow`);
      }
    } catch (error) {
      console.error("Error fetching tomorrow's electricity prices:", error);
      tomorrowData = [];
    }

    const formattedResponse = {
      today: todayData.map(item => ({
        dateTime: item.DateTime,
        price: item.PriceWithTax
      })),
      tomorrow: tomorrowData.map(item => ({
        dateTime: item.DateTime,
        price: item.PriceWithTax
      }))
    };

    return {
      statusCode: 200,
      body: JSON.stringify(formattedResponse),
    };
  } catch (error) {
    console.error("Error fetching electricity prices:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to fetch electricity prices' }),
    };
  }
};
