const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const apiKey = "50ff001f60f25122e3c4a1bb73057042";
const searchInput = document.querySelector('#input');
const searchBtn = document.querySelector('#searchBtn');
const weatherImg = document.querySelector('#weatherImg');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);
    document.querySelector('#temp').innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector('#city').innerHTML=data.name;
    document.querySelector('#humidity').innerHTML=data.main.humidity+"%";
    document.querySelector('#wind').innerHTML=data.wind.speed+" km/h";

    if (data.weather[0].main == "Clear") {
        weatherImg.src = "./images/clear.png";
    }else if (data.weather[0].main == "Rain") {
        weatherImg.src = "./images/rain.png";
    }else if (data.weather[0].main == "Drizzle") {
        weatherImg.src = "./images/drizzle.png";
    }else if (data.weather[0].main == "Mist") {
        weatherImg.src = "./images/mist.png";
    }
}

searchBtn.addEventListener("click", function () {
    checkWeather(searchInput.value);
    console.log(searchInput.value);
})
