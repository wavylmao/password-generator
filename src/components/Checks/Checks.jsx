import "./checks.scss"

export default function Checks() {
    return (
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
    );
}