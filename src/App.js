import "./styles.css";
import React, { useState } from "react";

const games = ["cricket", "footbal", "hocky", "badmintan", "chess"];
const days = ["weekday", "weekend"];

export default function App() {
  const [game, setGame] = useState();
  const [day, setDay] = useState();

  const handleChange = (e) => {
    setGame(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="App">
      <h1>Game Play</h1>
      {games.map((item, index) => {
        return (
          <>
            <input
              type="radio"
              value={item}
              name="game"
              onChange={handleChange}
            />
            <label>{item}</label>
          </>
        );
      })}
      <p>{game}</p>
      <h2>Days </h2>
      {days.map((item, index) => {
        return (
          <>
            <input
              type="radio"
              value={item}
              name="day"
              onChange={(e) => setDay(e.target.value)}
            />
            <label>{item}</label>
          </>
        );
      })}
      <p>{day}</p>
      <p>{`i play ${game} and ${day} `}</p>
    </div>
  );
}
