import { useState } from "react";
import "./styles.scss";

export default function App() {

  const [rangeValue, setRangeValue] = useState("1");

  function handleRangeChange(){
    setRangeValue(document.getElementById("rangeSelector").value);
  }

  return (
    <div className="App">
      <div className="wrapper">
        <h1 className="heading">Password Generator</h1>
        <div className="output-container">
          <input
            value=""
            placeholder="P4$5W0rD!"
            className="password-output"
            type="text"
            readOnly
          />
        </div>
        <div className="param-container">
          <div><h3 className="param-header">Character Length</h3>
          <h1 className="length-counter">{rangeValue}</h1>
          <div className="range-container">
            <input
              onChange={handleRangeChange}
              id="rangeSelector"
              class="range-input"
              type="range"
              min="1"
              max="20"
              value={rangeValue}
            />
          </div>
          <div className="checkbox-container">
            <input className="checkbox" type="checkbox" />
            <h3 className="param">Include Uppercase Letters</h3>
            <input className="checkbox" type="checkbox" />
            <h3 className="param">Include Lowercase Letters</h3>
            <input className="checkbox" type="checkbox" />
            <h3 className="param">Include Numbers</h3>
            <input className="checkbox" type="checkbox" />
            <h3 className="param">Include Symbols</h3>
            <div className="strength-container">
            <input
              value=""
              placeholder="STRENGTH"
              className="strength-output"
              type="text"
              readOnly
            />
            </div></div>
          
            <br />
            <button className="generate-button">Generate</button>
          </div>
        </div>
      </div>
    </div>
  );
}
