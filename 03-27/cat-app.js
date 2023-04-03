import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [catFacts, setCatFacts] = useState([]);

  const onClickPrevious = () => {
    setPageNumber((previousPageNumber) =>
      previousPageNumber > 1 ? previousPageNumber - 1 : 1
    );
  };

  const onClickNext = () => {
    setPageNumber((previousPageNumber) => previousPageNumber + 1);
  };

  useEffect(() => {
    fetchCatchFacts(pageNumber).then((catFactsFromFetch) =>
      setCatFacts(catFactsFromFetch)
    );
  }, [pageNumber]);


  return (
    <div className="app">
      <img src="https://images.unsplash.com/flagged/photo-1557427161-4701a0fa2f42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
      <div>Cat Facts</div>
      <div>Page Number {pageNumber}</div>
      <ul>
        {catFacts.map((catFactItem) => (
          <li>{catFactItem.fact}</li>
        ))}
      </ul>
      <button onClick={onClickPrevious}>Previous</button>
      <button onClick={onClickNext}>Next</button>
    </div>
  );
}

async function fetchCatchFacts(pageNumber) {
  const url = `https://catfact.ninja/facts?page=${pageNumber}`;

  const response = await fetch(url);

  const json = await response.json();

  return json.data;
}

export default App;