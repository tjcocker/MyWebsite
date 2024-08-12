const url =
	'https://api.openweathermap.org/data/2.5/weather';
const apiKey =
	'7599b9f74b54d18592f643b684f1a06d';
// This is a free API key with request limits. Not really worried about having it visible, or in my public repo on GitHub.

$(document).ready(function () {
	weatherFn('Denver');
});

async function weatherFn(cName) {
	const temp =
		`${url}?q=${cName}&appid=${apiKey}&units=imperial`;
	try {
		const res = await fetch(temp);
		const data = await res.json();
		if (res.ok) {
			weatherShowFn(data);
		} else {
			alert('City not found. Please try again.');
		}
	} catch (error) {
		console.error('Error fetching weather data:', error);
	}
}

function weatherShowFn(data) {
	$('#city-name').text(data.name);
	$('#date').text(moment().
		format('MMMM Do YYYY, h:mm:ss a'));
	$('#temperature').
		html(`${data.main.temp}`);
	$('#humidity').
		html(`${data.main.humidity}`);
	$('#wind-speed').
		html(`Wind Speed: ${data.wind.speed} m/s`);
	$('#weather-info').fadeIn();
}
