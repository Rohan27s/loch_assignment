import { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Signup from './components/SignUp';

function App() {
  const [show, setShow] = useState(false);

  const toggleShowSignup = (value) => {
    setShow(value);
  };
  return (
    <div className="App">
      <div className="topbar" onClick={() => { setShow(true) }}>
        <svg xmlns="http://www.w3.org/2000/svg" style={{ fill: "#FFFFFF" }} viewBox="0 0 50 50" width="40px" height="40px"><path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" /></svg>
      </div>
      <LandingPage />
      <Signup show={show} closeSignup={() => toggleShowSignup(false)} />
      {show && <Signup show={"show"} closeSignup={() => toggleShowSignup(false)} />}
    </div>
  );
}

export default App;
