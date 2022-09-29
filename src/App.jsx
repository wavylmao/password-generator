import { useEffect, useRef, useState } from "react";
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
  var charsArray = useRef([]);
  var chars = "";
  var password = useRef("");

  function flipCheckUpperCase() {
    includeUpperCase = document.getElementById("uppercaseCheckbox").checked;

    if (includeUpperCase === true) {
      charsArray.current.push(upperCaseLetters);
    } else {
      charsArray.current.splice(
        charsArray.current.indexOf(upperCaseLetters),
        1
      );
    }
    console.log(charsArray.current);
  }
  function flipCheckLowerCase() {
    includeLowerCase = document.getElementById("lowercaseCheckbox").checked;

    if (includeLowerCase === true) {
      charsArray.current.push(lowerCaseLetters);
    } else {
      charsArray.current.splice(
        charsArray.current.indexOf(lowerCaseLetters),
        1
      );
    }
    console.log(charsArray.current);
  }
  function flipCheckNumbers() {
    includeNumbers = document.getElementById("numbersCheckbox").checked;

    if (includeNumbers === true) {
      charsArray.current.push(numbers);
    } else {
      charsArray.current.splice(charsArray.current.indexOf(numbers), 1);
    }
    console.log(charsArray.current);
  }
  function flipCheckSymbols() {
    includeSymbols = document.getElementById("symbolsCheckbox").checked;

    if (includeSymbols === true) {
      charsArray.current.push(symbols);
    } else {
      charsArray.current.splice(charsArray.current.indexOf(symbols), 1);
    }
    console.log(charsArray.current);
  }

  const [rangeValue, setRangeValue] = useState("1");

  function handleRangeChange() {
    //USESTATE (setRangeValue) HOOK RESETS ARRAY FOR SOME REASON (I DON'T KNOW WHY)
    setRangeValue(document.getElementById("rangeSelector").value);
    console.log(charsArray.current);
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
  });

  function handleClick() {
    chars = charsArray.current.join("");
    console.log(charsArray.current);

    password.current = "";
    for (
      var i = 1, n = chars.length;
      i <= document.getElementById("rangeSelector").value;
      ++i
    ) {
      password.current += chars.charAt(Math.floor(Math.random() * n));
    }

    document.getElementById("password").value = password.current;
  }
  
  function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  alert("Copied the text: " + copyText.value);
}

  return (
    <div className="App">
      <div className="wrapper">
        <h1 className="heading">Password Generator</h1>
        <div className="output-container">
          <input
            value={password.current}
            placeholder="P4$5W0rD!"
            className="password-output"
            type="text"
            id="password"
            readOnly
          />
          <i class="fa-regular fa-copy"></i>
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
                  onClick={flipCheckUpperCase}
                  className="checkbox"
                  id="uppercaseCheckbox"
                  type="checkbox"
                />
                <span className="checkmark"></span>
              </label>
            </div>

            <h3 className="param">Include Uppercase Letters</h3>
            <br />
            <div className="check-container">
              <label className="checkmark-container">
                <input
                  onClick={flipCheckLowerCase}
                  id="lowercaseCheckbox"
                  className="checkbox"
                  type="checkbox"
                />
                <span className="checkmark"></span>
              </label>
            </div>

            <h3 className="param">Include Lowercase Letters</h3>
            <br />
            <div className="check-container">
              <label className="checkmark-container">
                <input
                  onClick={flipCheckNumbers}
                  className="checkbox"
                  id="numbersCheckbox"
                  type="checkbox"
                />
                <span className="checkmark"></span>
              </label>
            </div>

            <h3 className="param">Include Numbers</h3>
            <br />
            <div className="check-container">
              <label className="checkmark-container">
                <input
                  onClick={flipCheckSymbols}
                  className="checkbox"
                  id="symbolsCheckbox"
                  type="checkbox"
                />
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
            <button onClick={handleClick} className="generate-button">
              Generate →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
