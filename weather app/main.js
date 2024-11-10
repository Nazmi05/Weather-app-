fetch("http://api.openweathermap.org/data/2.5/forecast?id=1528334&appid=f7d1be4d8c411d5002f738605fcd12a7")
  .then(function (response) {
    return response.json();
  })
  .then(function (weatherData) {
    console.log(weatherData.list);

    const weather_img = [
      {
        id: "Clear",
        imgUrl: "https://media.istockphoto.com/id/1384871782/vector/hand-drawn-cute-doodle-sun-vector-summer-clipart-outline.jpg?s=612x612&w=0&k=20&c=_UufxTdgP1ptfUBRRK2ieNMZ8K9ojlZNkSuggOf6W5o=",
      },
      {
        id: "Rain",
        imgUrl: "https://t3.ftcdn.net/jpg/08/10/74/56/360_F_810745672_DTjyK7y7TnPtRIsbnb00cL0bnt3kY8IJ.jpg",
      },
        {id: "Snow",
            imgUrl:  "https://thumbs.dreamstime.com/b/winter-coloring-book-page-simple-snowflake-black-white-outline-style-vector-illustration-isolated-background-ready-335251166.jpg"
        },
      {
        id: "Clouds",
        imgUrl: "https://i.pinimg.com/736x/4f/a7/10/4fa710d29ac114f7db42be72d10edc1b.jpg",
      }
    ];

    
    function getWeatherImage(condition) {
      const weather = weather_img.find(img => img.id === condition);
      return weather ? weather.imgUrl : ""; 
    }

    const card = document.querySelector(".weather-card");

    
    weatherData.list.forEach(function (forecast) {
      const condition = forecast.weather[0].main; 
      const imgUrl = getWeatherImage(condition);  
      card.innerHTML += `
        <div class="location">
          <span class="city">${weatherData.city.name}</span>,
          <span class="country">${weatherData.city.country}</span>
        </div>
        <div class="main__tem">
      <div class="main__img"> 
        <img class="weather__img" src="${imgUrl}" alt="${condition}">
      </div>
      <div class="main__des"> 
        <div class="temperature">Temperature: ${Math.ceil(forecast.main.temp - 273)}°C</div>
        <div class="tem-feel">Feels-like: ${Math.ceil(forecast.main.feels_like - 273)}°C</div>
         <span class="time">Current time: ${forecast.dt_txt}</span>
    </div>
     </div>
  <div class="detailed__inf">
        <div class="inf__text">
               <div class="humidity">Humidity: ${forecast.main.humidity}%</div>
               <div class="pressure">Pressure: ${forecast.main.pressure} hPa</div>
               <div class="sea__level">Sea level: ${forecast.main.sea_level} hPa</div>
               <div class="conditions">Conditions: ${forecast.weather[0].description}</div>
               <div class="wind">Wind speed: ${forecast.wind.speed} m/s</div>
               <div class="gust">Gust: ${forecast.wind.gust} m/s</div>
               <div class="deg">Wind direction: ${forecast.wind.deg}°</div>
               <div class="visibility">Visibility: ${forecast.visibility} m</div>
               </div>
               <div class="inf__img">
              <img class="my__wish" src="https://i.pinimg.com/736x/b7/cb/8f/b7cb8f6b4d9d88607921ca9da26be755.jpg" alt="wish__for__day">
               </div>
               </div>
        <hr class="line"> 
      `;
    });
  })
  .catch(function () {
    console.log("Error");
  });

