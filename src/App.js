//jshint esversion:6
import { useState } from "react";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import Checks from "./components/Checks/Checks.jsx"
import "./styles.scss";

export default function App() {
  const [rangeValue, setRangeValue] = useState("1");

  function handleRangeChange() {
    setRangeValue(document.getElementById("rangeSelector").value);
  }

  // const slider = document.getElementById("rangeSelector");
  // const min = slider.min;
  // const max = slider.max;
  // const value = slider.value;

  // slider.style.background = `linear-gradient(to right, #6bffab 0%, #6bffab ${
  //   ((value - min) / (max - min)) * 100
  // }%, #DEE2E6 ${((value - min) / (max - min)) * 100}%, #DEE2E6 100%)`;

  // slider.oninput = function () {
  //   this.style.background = `linear-gradient(to right, #6bffab 0%, #6bffab ${
  //     ((this.value - this.min) / (this.max - this.min)) * 100
  //   }%, #DEE2E6 ${
  //     ((this.value - this.min) / (this.max - this.min)) * 100
  //   }%, #DEE2E6 100%)`;
  // };

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
          <h3 className="param-header">Character Length</h3>
          <div className="length-counter-container">
            <h1 className="length-counter">{rangeValue}</h1>
          </div>
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
            <Checks />
          <div className="strength-container">
            <input
              value=""
              placeholder="STRENGTH"
              className="strength-output"
              type="text"
              readOnly
            />
          </div>
          <br />
          <div className="button-container">
            <button className="generate-button">Generate →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
