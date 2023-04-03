import logo from "./logo.svg";
import "./App.css";

// add in props
// date text
// weather text
function App({ dateText, weatherText }) {
  return (
    <div className="App">
      <div id="date">
        <label>Today's Date</label>
        <p>{dateText}</p>
      </div>

      <div id="weather">
        <label>Today's Weather</label>
        <p>{weatherText}</p>
      </div>
    </div>
  );
}

export default App;
