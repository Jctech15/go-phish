import React, { useState } from "react";
import "./App.css";
import mslogo from "../src/ms.logo.jpg";
import optionsKey from "../src/microsoft key sign in options.svg";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [password, setPassword] = useState("");

  const emailRegEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
    setError(false);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = () => {
    if (password && email.toLowerCase().match(emailRegEx)) {
      alert("Thank you for your credentials :)");
    }
    if (email.toLowerCase().match(emailRegEx)) {
      setValidEmail(true);
    } else {
      setError(true);
    }
  };

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
          {error && (
            <p className="errorText">
              Enter a valid email address, phone number, or Skype name.
            </p>
          )}
          <input
            onSubmit={onChangeEmail}
            onChange={onChangeEmail}
            className="loginfmt"
            type="email"
            placeholder="Email, phone, or Skype"
          />
          {validEmail && (
            <input
              onChange={onChangePassword}
              className="loginfmt"
              type="password"
              placeholder="Password"
            />
          )}
          <p className="loginCTA">
            No Account? <a href="">Create One!</a>
          </p>
          <p className="loginCTA">
            <a href="">Can't access your account?</a>
          </p>
          <div className="buttonGroup">
            <button
              className="backButton"
              type="button"
              style={{ marginRight: "5px" }}
            >
              Back
            </button>
            <button onClick={onSubmit} className="nextButton" type="submit">
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
