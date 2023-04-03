const apiKey = '9d51dd32a009464c83d34112230304';

//Search Bar
const search = document.querySelector('#search');
const searchBtn = document.querySelector('#search-btn');

searchBtn.addEventListener('click', () => {
	const cityName = search.value;

	if(cityName) {
		const weatherData = getWeatherData(cityName);

		weatherData.then(obj => {
			console.log(obj.data);
			displayData(obj.data);
		}).catch(error => console.log('Error Caught : ', {error}));
	}
});


// Fields
const temperature = document.querySelector('#temperature');
const city = document.querySelector('#city');
const humidity = document.querySelector('#humidity');
const precipitation = document.querySelector('#precipitation');
const wind = document.querySelector('#wind');

// Takes a city the returns the weather data as a promise
async function getWeatherData(city) {
	const response = axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);

	return response;
}

function displayData(data) {
	createIcon(data.current.condition.icon);
	temperature.innerHTML = `${data.current.temp_c}&#x2103;`;
	city.textContent = `${data.location.name}, ${data.location.country}`;
	humidity.textContent = `${data.current.humidity}`;
	precipitation.textContent = `${data.current.precip_in} in`;
	wind.textContent = `${data.current.wind_kph} kph`;
}

function createIcon(iconLink) {
	const quickPanel = document.querySelector('.quick-panel');
	quickPanel.removeChild(quickPanel.lastChild)
	const icon = document.createElement('img');
	icon.src = iconLink;
	quickPanel.appendChild(icon);
}