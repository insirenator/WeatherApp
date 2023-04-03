const apiKey = '9d51dd32a009464c83d34112230304';

// Takes a city the returns the weather data as a promise
async function getWeatherData(city) {
	const response = axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);

	return response;
}

// const weatherIcon = document.querySelector('#weather-icon');



/*weatherData.then(d => {
	console.log(d.data)
	weatherIcon.src = d.data.current.condition.icon;
});*/