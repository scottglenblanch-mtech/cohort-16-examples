import { useState } from "react";

export default function ShowWeather() {
  const [weatherText, setWeatherText] = useState("Loading weather text...");

  async function fetchAndUpdateWeatherText() {
    const newWeatherText = await getWeatherText();

    setWeatherText(newWeatherText);
  }

  fetchAndUpdateWeatherText();

  return (
    <div id="weather">
      <label>Today's Weather</label>
      <p>{weatherText}</p>
    </div>
  );
}

async function getWeatherText() {
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=40.39&longitude=-111.85&hourly=temperature_2m&current_weather=true&temperature_unit=fahrenheit";
  const response = await fetch(url);
  const data = await response.json();
  const temperatureInFarenheit = data.hourly["temperature_2m"][0];

  return `${temperatureInFarenheit} degrees farenheit`;
}
