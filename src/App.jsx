import { useEffect, useState } from "react";

import "./App.css";
import Cell from "./components/Cell";

const initialValue = ["", "", "", "", "", "", "", "", ""];
function App() {
  const [cells, setCells] = useState(initialValue);
  const [symbol, setSymbol] = useState(false);
  const [winningMessage, setWinningMessage] = useState("");
  const [go, setGo] = useState("");

  const checkScore = () => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winningCombos.forEach((array) => {
      const circleWins = array.every((cell) => cells[cell] === "circle");
      if (circleWins) {
        setWinningMessage("Circle wins!");
        return;
      }
    });

    winningCombos.forEach((array) => {
      const crossWins = array.every((cell) => cells[cell] === "cross");
      if (crossWins) {
        setWinningMessage("Cross wins!");
        return;
      }
    });

    const draw = cells.every((cell) => cell !== "");
    if (draw) {
      setWinningMessage("Draw!");
    }
  };

  const handleRestart = () => {
    setCells(initialValue);
    setWinningMessage("");
    setGo("");
  };

  useEffect(() => {
    checkScore();
    setGo((symbol ? "Circle" : "Cross") + " turn!");
  }, [symbol]);

  return (
    <div className="m-0 p-0 flex flex-col justify-center items-center min-h-screen">
      {!winningMessage && (
        <p className={`text-2xl ${symbol ? "text-blue-600" : "text-red-600"}`}>
          {go}
        </p>
      )}
      <div className="w-[602px] h-[602px] flex flex-wrap border-[1px] border-solid border-black">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cell={cell}
            setCells={setCells}
            cells={cells}
            symbol={symbol}
            setSymbol={setSymbol}
            winningMessage={winningMessage}
          />
        ))}
      </div>
      <p className="text-3xl text-red-900">{winningMessage}</p>
      {winningMessage && (
        <button
          className="border-solid border-2 border-black p-1 bg-red-200 rounded-md mt-2 text-2xl w-20"
          onClick={handleRestart}
        >
          Restart
        </button>
      )}
    </div>
  );
}

export default App;
