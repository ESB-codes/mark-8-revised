import "./styles.css";
import React from "react";
import { useState } from "react";

const flags = {
  "🇮🇳": "India",
  "🇵🇰": "Pakistan",
  "🇧🇩": "Bangladesh",
  "🇱🇰": "Sri-Lanka",
  "🇳🇵": "Nepal",
  "🇺🇸": "USA",
  "🇬🇧": "UK",
  "🇮🇩": "Indonesia",
  "🇷🇺": "Russia",
  "🇨🇦": "Canada"
};

// creating an array from the object to display them on webpage
let ourFlags = Object.keys(flags);

export default function App() {
  // creating a state event to change output when state changes
  let [meaning, setter] = useState("");

  function changeEvent(event) {
    let userInput = event.target.value;
    meaning = flags[userInput];
    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }

    setter(meaning);
  }

  function clickEvent(event) {
    console.log(event);
    meaning = flags[event];
    setter(meaning);
  }
  return (
    <div className="App">
      <h1>Flag Interpreter</h1>
      <input
        placeholder="paste the emoji"
        onChange={changeEvent}
        style={{ padding: "1rem" }}
      ></input>
      <h2>{meaning}</h2>
      {ourFlags.map((x) => {
        return (
          <span
            onClick={() => clickEvent(x)}
            style={{ fontSize: "2rem", cursor: "pointer", padding: "1rem" }}
          >
            {x}
          </span>
        );
      })}
    </div>
  );
}
