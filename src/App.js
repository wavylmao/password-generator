import "../public/styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <h1 className="heading">Password Generator</h1>
        <input className="password-output" type="text" readOnly />
      </div>
    </div>
  );
}
