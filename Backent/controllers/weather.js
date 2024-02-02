import axios from "axios"



export const weather = (async (req, res, next) => {


  const cities = req.body.cities;
  const weatherData = {};

  for (const city of cities) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=55796aed08a550a1fecd40a072948119&units=metric`;

    try {
      const response = await axios.get(url);
      const temperature = response.data.main.temp;
      weatherData[city] = `${temperature}C`;
    } catch (error) {
      console.error(error);
      weatherData[city] = 'Please Enter Correct city Name';
    }
  }

  res.json({ weather: weatherData });



})
