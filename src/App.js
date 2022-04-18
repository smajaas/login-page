import { useState } from "react";
import InputBox from "./reusableComponent/InputBox";
import Login from "./assets/images/loginimg.png";
import PWDRequisite from "./PWDRequisite";
import "./App.css";

function App () {
  const [input, setInput] = useState({ username: "" });
  const [password, setPassword] = useState("");
  const [pwdRequiste, setPWDRquisite] = useState(false);
  const [checks, setChecks] = useState({
    capsLetterCheck: false,
    numberCheck: false,
    pwdLengthCheck: false,
    specialCharCheck: false,

  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    setPassword(e.target.value);
    };

    const handleOnFocus = () => {
    setPWDRquisite(true);
  };

  const handleOnBlur = () => {
    setPWDRquisite(false);
  };

  
  const handleOnSubmit = (e) => {
  e.preventDefault();
  console.log(input);
  };

  const handleOnKeyUp = (e) => {
    const { value } = e.target;
    const capsLetterCheck = /[A-Z]/.test(value);
    const numberCheck = /[0-9]/.test(value);
    const pwdLengthCheck = value.length >= 8;
    const specialCharCheck = /[!@#$%^&*]/.test(value);
    setChecks({
      capsLetterCheck,
      numberCheck,
      pwdLengthCheck,
      specialCharCheck,
    });
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleOnSubmit}>
        <img className="login-img" src={Login} alt="login" />
        <InputBox
          id="username"
          type="text"
          name="username"
          value={input.username}
          label="Username"
          onChange={handleOnChange}
        />
        <InputBox
          id="password"
          type="password"
          name="password"
          value={password}
          label="Password"
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          onKeyUp={handleOnKeyUp}
        />
        <button type="submit">Login</button>

        {pwdRequiste ? (
  <PWDRequisite
    capsLetterFlag={checks.capsLetterCheck ? "valid" : "invalid"}
    numberFlag={checks.numberCheck ? "valid" : "invalid"}
    pwdLengthFlag={checks.pwdLengthCheck ? "valid" : "invalid"}
    specialCharFlag={checks.specialCharCheck ? "valid" : "invalid"}
  />
) : null}
      </form>

     
    </div>


  );
};

export default App;