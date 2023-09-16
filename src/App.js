import "./App.css";
import mslogo from "../src/ms.logo.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="login-box">
            <img src={mslogo} alt="" />
            <div>Sign In</div>
            <input
              className="loginfmt"
              type="email"
              placeholder="Email, phone, or Skype"
            />
            <div>No Account? Create One</div>
            <div>Can't access your account?</div>
            <div>
              <button type="button">Back</button>
              <button type="submit">Next</button>
            </div>
          </div>
          <div className="other-login">Sign-in options</div>
        </div>
      </header>
    </div>
  );
}

export default App;
