import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link } from "react-router-dom";

const Register = () => {
  return(
    <>
  <div class="mainContainer">
    <div class="box">
      <div class="title-box" >
       
        <button class="login" to="/register">Register</button>
        <Link class="register" to="/">Login</Link>
      </div>
      {/* <div class="icon">
        <img src="./pics/fb.png" alt="" />
        <img src="./pics/gp.png" alt="" />
        <img src="./pics/tw.png" alt="" />
      </div> */}
<br />
<br />
      <div class="input-field" id="login">
        <input type="text" class="input-text" placeholder="Email" />
        <input class="input-text" type="text" placeholder="Username " />
        <input
          class="input-text"
          type="password"
          placeholder="pasword"
        />
        <input type="checkbox" id="log-checkbox" />
        <label for="log-checkbox">Remember Password</label>
        <input type="text" class="input-text" />
        <button>Register</button>
      </div>

      <div class="input-field" id="register">
        <input class="input-text" type="text" placeholder="User ID" />
        <input class="input-text" type="text" placeholder="Email ID" />

        <input
          class="input-text"
          type="password"
          placeholder="Enter password"
        />
        <input type="checkbox" id="regi-checkbox" />
        <label for="regi-checkbox">I agree to the term & conditions</label>
        <button>Register</button>
        
      </div>
    </div>
  </div>;
  </>
  )
};

export default Register;
