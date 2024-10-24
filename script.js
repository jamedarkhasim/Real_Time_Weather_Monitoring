let weather = {
    apiKey: "dd8a777a819243146521894cad30877d",  // Replacing  with my OpenWeatherMap API key
    fetchWeather: function(city) {
        fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${this.apiKey}`
        )
            .then(response => {
                if (!response.ok) {
                    alert("Weather data not found.");
                    throw new Error("No weather found.");
                }
                return response.json();
            })
            .then(data => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data.city;
        const { icon, description } = data.list[0].weather[0];
        const { temp, feels_like, humidity, temp_min, temp_max } = data.list[0].main;
        const { speed } = data.list[0].wind;
        const datetime = data.list[0].dt_txt;
        
        const selectedUnit = ttt; // Get unit preference

        const convertTemp = (temp, unit) => {
            switch (unit) {
                case "F": return ((temp * 9/5) + 32).toFixed(2);
                case "K": return (temp + 273.15).toFixed(2);
                default: return temp.toFixed(2);
            }
        };

        // Update main weather card
        document.querySelector(".city").innerText = `Weather in ${name}`;
        document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}.png`;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = `${convertTemp(temp, selectedUnit)} °${selectedUnit}`;
        document.querySelector(".temp-feels-like").innerText = `Feels like: ${convertTemp(feels_like, selectedUnit)} °${selectedUnit}`;
        document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
        document.querySelector(".wind").innerText = `Wind speed: ${speed} km/h`;
        document.querySelector(".dt").innerText = `Last updated: ${datetime}`;
        
        // Update forecast section
        const updateForecast = (index, tempSelector, iconSelector, dateSelector) => {
            document.querySelector(iconSelector).src = `https://openweathermap.org/img/wn/${data.list[index].weather[0].icon}.png`;
            document.querySelector(tempSelector).innerText = `${convertTemp(data.list[index].main.temp, selectedUnit)} °${selectedUnit}`;
            document.querySelector(dateSelector).innerText = data.list[index].dt_txt;
        };
        
        updateForecast(6, ".temp1", ".icon1", ".dt1");
        updateForecast(12, ".temp2", ".icon2", ".dt2");
        updateForecast(18, ".temp3", ".icon3", ".dt3");
        updateForecast(24, ".temp4", ".icon4", ".dt4");
        updateForecast(30, ".temp5", ".icon5", ".dt5");

        document.querySelector(".weather").classList.remove("loading");
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.key === "Enter") weather.search();
});

var ttt = "C";  // Default temperature unit
document.querySelector("select").addEventListener("change", function(event) {
    ttt = event.target.value;
    weather.fetchWeather(document.querySelector(".city").innerText.split("Weather in ")[1] || "Bangalore");
});

weather.fetchWeather("Bangalore");  // Default city on load
