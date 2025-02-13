document.getElementById("fetchBtn").addEventListener("click", async () => {
    const city = document.getElementById("city").value.trim();
    const errorMsg = document.querySelector(".error");
    const weatherInfo = document.querySelector(".weather-info");

    if (!city) {
        errorMsg.textContent = "Please enter a city name!";
        weatherInfo.style.display = "none";
        return;
    }

    errorMsg.textContent = ""; // Clear previous errors

    const apiKey = "YOUR_OPEN_WEATHER_API_KEY"; // Replace with actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found! Please check the city name.");
        }

        const data = await response.json();
        document.getElementById("cityname").textContent = `Weather in ${data.name}`;
        document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById("description").textContent = `Description: ${data.weather[0].description}`;

        weatherInfo.style.display = "block"; // Show weather details
    } catch (error) {
        errorMsg.textContent = error.message;
        weatherInfo.style.display = "none"; // Hide weather section on error
    }
});
