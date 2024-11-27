# Real_Time_Weather_Monitoring

## Overview
This is a real-time weather monitoring application that retrieves and displays weather data for various cities in India. The application uses the **OpenWeatherMap API** to fetch live weather data, including temperature, humidity, wind speed, and weather conditions. The app provides weather forecasts, allows users to switch between temperature units (Celsius, Fahrenheit, Kelvin), and includes background video for a visually engaging interface.

## Key Features
**Real-time Weather Data**: Fetches current weather conditions and forecasts for selected cities.
**Temperature Conversion**: Supports temperature conversion between Celsius, Fahrenheit, and Kelvin.
**Visual Weather Summary**: Displays weather icons, descriptions, and forecasts with user-friendly UI.
**Customizable Thresholds and Alerts**: Alerts for weather exceeding defined thresholds (future feature).
**Background Video**: A visually appealing video related to weather runs in the background.

## Demo

![image](https://github.com/user-attachments/assets/ec697041-9e7c-4d2f-89d3-3c38b8ef8dff)




## Technologies Used
**Frontend**: HTML, CSS, JavaScript

**API**: [OpenWeatherMap API](https://openweathermap.org/api)

**Video Background**: [Pexels Video](https://www.pexels.com/video/puddle-of-water-856282/)

## Prerequisites
Before running this application, ensure you have the following:
1. **Node.js** installed on your machine. [Download Node.js](https://nodejs.org/)
2. A valid **API key** from [OpenWeatherMap](https://openweathermap.org/).

## Installation
Follow these steps to set up the project:
1. **Clone the repository**:
   ```bash
   git clone https://github.com/jamedarkhasim/weather-monitoring-app.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd weather-monitoring-app
   ```
3. **Install the dependencies** (if any):
   ```bash
   npm install
   ```
4. **Add your API key**:
   Open `script.js` and replace `"your_api_key_here"` with your actual OpenWeatherMap API key:
   ```javascript
   apiKey: "your_api_key_here",
   
## Running the Application
1. **Start the application** using a live server:
   If you have **Live Server** installed in VS Code, right-click on `index.html` and select **"Open with Live Server"**.
   Alternatively, you can use any local development server such as:
     ```bash
     npx live-server
   
2. **Open your browser** and go to `http://localhost:5500/` (or the port number provided by Live Server).

## Usage
1. **Search for a City**: 
   Enter the name of an Indian metro city (e.g., Bangalore, Mumbai, Delhi) into the search bar to retrieve current weather data.
2. **Temperature Conversion**: 
   Use the dropdown to switch between Celsius, Fahrenheit, and Kelvin.
3. **Forecast**: 
   View the weather forecast for the next few hours, including temperature and weather conditions.



## Features to be Implemented
**Alerts**: Set user-defined temperature or weather condition thresholds to trigger alerts.
**Historical Trends**: Analyze and display historical weather data.
**Additional Weather Parameters**: Include more data points like humidity, wind speed, etc.

## Dependencies
**OpenWeatherMap API** for fetching weather data.
**Node.js** for dependency management (if applicable).
**Live Server** for running the application locally.

## Background Video
The background video used in this application is from [Pexels](https://www.pexels.com/video/puddle-of-water-856282/) and features a calming puddle of water that complements the theme of the weather monitoring app.

## Contributing
Contributions are welcome! Please fork this repository and submit pull requests with new features, bug fixes, or improvements.

## Contact
**Author**: Jamedar Mohammed Khasim

**Email**: jamedarmdkhasim@gmail.com

Feel free to reach out for any queries or contributions!

