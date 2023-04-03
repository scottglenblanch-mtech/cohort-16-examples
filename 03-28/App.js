import { useState, useEffect } from "react";
import "./App.css";

const fetchDogImageUrls = async () => {
  const url =
    "https://shibe.online/api/shibes?count=100&urls=true&httpsUrls=true";
  const response = await fetch(url);
  const json = await response.json();

  return json;
};

function App() {
  const [dogImageUrls, setDogImageUrls] = useState([]);
  const [cursor, setCursor] = useState(0);
  const onClickShowMore = () => {
    const newCursor = cursor + 10 < 100 ? cursor + 10 : 0;
    setCursor(newCursor);
  };

  useEffect(() => {
    const initData = async () => {
      setDogImageUrls(await fetchDogImageUrls());
    };

    initData();
  }, []);

  return (
    <div className="App">
      <button onClick={onClickShowMore}>Show More</button>
      {dogImageUrls.slice(cursor, cursor + 10).map((imgSrc) => (
        <img src={imgSrc} />
      ))}
    </div>
  );
}

export default App;
