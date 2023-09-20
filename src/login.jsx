import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const [accounts, setAccounts] = useState([
    {
      id: 0,
      username: "yourname",
      password: "k",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.username !== "" && formData.password !== "") {
      const storedAccounts = JSON.parse(localStorage.getItem("accounts")) || [];

      const existingAccount = storedAccounts.find(
        (account) =>
          account.username === formData.username &&
          account.password === formData.password
      );

      if (existingAccount) {
        alert("Login berhasil!");
        console.log(storedAccounts);
        navigate("/Home");
      } else {
        alert("Username atau password salah!");
      }
    } else {
      alert("Harap isi semua kolom!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="mainContainer">
      <div className="box">
        <div className="title-box">
          <button className="register">Log in</button>
        </div>
        <br />
        <br />

        <div>
          <form
            action=""
            onSubmit={handleSubmit}
            className="input-field"
            id="login"
          >
            <input
              className="input-text"
              type="text"
              placeholder="User ID"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <input
              className="input-text"
              type="password"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            <input type="checkbox" id="log-checkbox" />
            <label htmlFor="log-checkbox">Remember Password</label>
            <div id="r">
              <center>
                <button type="submit" id="r" className="r">
                  Log In
                </button>
              </center>
            </div>
          </form>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <center>
            <div className="p">
              Not a member? <div></div>
              <Link id="p" className="register" to="/register">
                Sign Up
              </Link>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Login;
