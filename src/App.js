import "./App.css";
import mslogo from "../src/ms.logo.jpg";
import optionsKey from "../src/microsoft key sign in options.svg";
import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="login-box">
          <img src={mslogo} alt="" />
          <h2
            style={{
              margin: "auto",
              marginBottom: "10px",
              marginTop: "10px",
            }}
          >
            Sign In
          </h2>
          <input
            className="loginfmt"
            type="email"
            placeholder="Email, phone, or Skype"
          />
          <p className="loginCTA">
            No Account? <a href="www.google.com">Create One!</a>
          </p>
          <p className="loginCTA">
            <a href="www.google.com">Can't access your account?</a>
          </p>
          <div className="buttonGroup">
            <button
              className="backButton"
              type="button"
              style={{ marginRight: "5px" }}
            >
              Back
            </button>
            <button className="nextButton" type="submit">
              Next
            </button>
          </div>
        </div>
      </div>
      <div className="optionsContainer">
        <img id="keylogo" src={optionsKey} alt="" />
        <div className="other-login">Sign-in options</div>
      </div>
    </div>
  );
}

export default App;
