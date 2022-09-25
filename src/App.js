//jshint esversion:6
import { useEffect, useState } from "react";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import _, { includes } from "lodash";
import "./styles.scss";

export default function App() {
    var includeLowerCase = false;
    var includeUpperCase = false;
    var includeNumbers = false;
    var includeSymbols = false;
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()";
    var charsArray = [];
    var chars = "";
    var passwordLength = rangeValue;
    var password = "";

    function handleCheckLowerCase() {
      includeLowerCase = !includeLowerCase;

      if (includeLowerCase === true) {
        charsArray.push(lowerCaseLetters);
      } else {
        charsArray.splice(charsArray.indexOf(lowerCaseLetters), 1);
      }
      chars = charsArray.join("");
      console.log(chars);
    }
    function handleCheckUpperCase() {
      includeUpperCase = !includeUpperCase;

      if (includeUpperCase === true) {
        charsArray.push(upperCaseLetters);
      } else {
        charsArray.splice(charsArray.indexOf(upperCaseLetters), 1);
      }
      chars = charsArray.join("");
      console.log(chars);
    }
    function handleCheckNumbers() {
      includeNumbers = !includeNumbers;

      if (includeNumbers === true) {
        charsArray.push(numbers);
      } else {
        charsArray.splice(charsArray.indexOf(numbers), 1);
      }
      chars = charsArray.join("");
      console.log(chars);
    }
    function handleCheckSymbols() {
      includeSymbols = !includeSymbols;

      if (includeSymbols === true) {
        charsArray.push(symbols);
      } else {
        charsArray.splice(charsArray.indexOf(symbols), 1);
      }
      chars = charsArray.join("");
      console.log(chars);
    }
  const [rangeValue, setRangeValue] = useState("1");

  function handleRangeChange() {
    setRangeValue(document.getElementById("rangeSelector").value);
  }

  useEffect(() => {
      const slider = document.getElementById("rangeSelector");
      const min = slider.min;
      const max = slider.max;
      const value = slider.value;

      slider.style.background = `linear-gradient(to right, #6bffab 0%, #6bffab ${
        ((value - min) / (max - min)) * 100
      }%, #DEE2E6 ${((value - min) / (max - min)) * 100}%, #DEE2E6 100%)`;

      slider.oninput = function () {
        this.style.background = `linear-gradient(to right, #6bffab 0%, #6bffab ${
          ((this.value - this.min) / (this.max - this.min)) * 100
        }%, #DEE2E6 ${
          ((this.value - this.min) / (this.max - this.min)) * 100
        }%, #DEE2E6 100%)`;
      };
  })
  
  function handleClick() {}

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
              className="range-input"
              type="range"
              min="1"
              max="20"
              value={rangeValue}
            />
          </div>
          <div className="checkbox-container">
            <div className="check-container">
              <label className="checkmark-container">
                <input
                  onClick={handleCheckUpperCase}
                  className="checkbox"
                  type="checkbox"
                />
                <span className="checkmark"></span>
              </label>
            </div>

            <h3 className="param">Include Uppercase Letters</h3>
            <br />
            <div className="check-container">
              <label className="checkmark-container">
                <input onClick={handleCheckLowerCase} className="checkbox" type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>

            <h3 className="param">Include Lowercase Letters</h3>
            <br />
            <div className="check-container">
              <label className="checkmark-container">
                <input onClick={handleCheckNumbers} className="checkbox" type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>

            <h3 className="param">Include Numbers</h3>
            <br />
            <div className="check-container">
              <label className="checkmark-container">
                <input onClick={handleCheckSymbols} className="checkbox" type="checkbox" />
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
