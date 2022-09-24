import { useState } from "react";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import "./styles.scss";

  const mySlider = document.getElementById("rangeSelector");
  const sliderValue = document.getElementById("slider-value");

export default function App() {
  const [rangeValue, setRangeValue] = useState("1");

  function handleRangeChange() {
    setRangeValue(document.getElementById("rangeSelector").value);
  }
  
document.getElementById("rangeSelector").oninput = function () {
  var value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, #6bffab 0%, #6bffab " +
    value +
    "%, #fff " +
    value +
    "%, white 100%)";
};

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
          <div className="checkbox-container">
            <div className="check-container">
              <label className="checkmark-container">
                <input className="checkbox" type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>

            <h3 className="param">Include Uppercase Letters</h3>
            <br />
            <div className="check-container">
              <label className="checkmark-container">
                <input className="checkbox" type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>

            <h3 className="param">Include Lowercase Letters</h3>
            <br />
            <div className="check-container">
              <label className="checkmark-container">
                <input className="checkbox" type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>

            <h3 className="param">Include Numbers</h3>
            <br />
            <div className="check-container">
              <label className="checkmark-container">
                <input className="checkbox" type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>

            <h3 className="param">Include Symbols</h3>
            <br />
          </div>
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
