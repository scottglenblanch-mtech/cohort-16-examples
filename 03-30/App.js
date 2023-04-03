import { useState, useEffect } from "react";
import "./App.css";

function getInitialMatrix() {
  return new Array(3).fill(null).map((o, rowIndex) => {
    return new Array(3).fill(null).map((o, cellIndex) => "");
  });
}

function App() {
  const [matrix, setMatrix] = useState(getInitialMatrix());
  const [playerTurn, setPlayerTurn] = useState("X");

  const onClickCell = ({ rowIndex, cellIndex }) => {
    console.log("this clicked", rowIndex, cellIndex);

    // see if the cell is empty
    const isCellEmpty = matrix[rowIndex][cellIndex] === "";

    if (isCellEmpty) {
      // if the cell is empty, add in the X or the O
      matrix[rowIndex][cellIndex] = playerTurn;
      setMatrix([...matrix]);
    }
  };

  useEffect(() => {
    setPlayerTurn(playerTurn === "X" ? "O" : "X");
  }, [matrix]);

  return (
    <div className="App">
      {matrix.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cellValue, cellIndex) => (
            <div
              key={cellIndex}
              className="cell"
              onClick={() => onClickCell({ rowIndex, cellIndex })}
            >
              {cellValue}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
