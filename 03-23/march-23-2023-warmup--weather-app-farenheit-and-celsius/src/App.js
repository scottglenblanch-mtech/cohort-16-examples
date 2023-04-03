import logo from "./logo.svg";
import "./App.css";
import ShowDate from "./ShowDate";
import ShowWeather from "./ShowWeather";

// add in props
// date text
// weather text
function App() {
  return (
    <div className="App">
      <ShowDate />
      <ShowWeather />
    </div>
  );
}

export default App;
