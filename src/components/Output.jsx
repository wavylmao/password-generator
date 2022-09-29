import "../styles.scss"

function Output() {
    reuturn(
          <input
            value={password.current}
            placeholder="P4$5W0rD!"
            className="password-output"
            type="text"
            id="password"
            readOnly
          />
    );
}

export default Output;