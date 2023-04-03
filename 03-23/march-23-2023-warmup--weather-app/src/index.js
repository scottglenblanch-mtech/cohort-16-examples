import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

renderReactAppAfterFetchingData();

async function renderReactAppAfterFetchingData() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  const { dateText, weatherText } = await getData();
  root.render(
    <React.StrictMode>
      <App dateText={dateText} weatherText={weatherText} />
    </React.StrictMode>
  );
}

async function getData() {
  const dateText = getDateText();
  const weatherText = await getWeatherText();
  return {
    dateText,
    weatherText,
  };
}

function getDateText() {
  return new Date().toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

async function getWeatherText() {
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=40.39&longitude=-111.85&hourly=temperature_2m&current_weather=true&temperature_unit=fahrenheit";
  const response = await fetch(url);
  const data = await response.json();
  const temperatureInFarenheit = data.hourly["temperature_2m"][0];

  return `${temperatureInFarenheit} degrees farenheit`;
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
