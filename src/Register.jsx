import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const accounts = [
    {
      id: 0,
      email: "youremail@gmail.com",
      username: "yourname",
      password: "yourpassword",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.username !== "" &&
      formData.email !== "" &&
      formData.password !== ""
    ) {
      const newAccount = {
        id: accounts.length,
        email: formData.email,
        username: formData.username,
        password: formData.password,
      };

      // Menambahkan akun baru ke array accounts
      accounts.push(newAccount);

      // Menyimpan array accounts di localStorage
      localStorage.setItem("accounts", JSON.stringify(accounts));

      alert("Registrasi berhasil!");
      console.log(accounts);

      navigate("/");

      setFormData({
        username: "",
        email: "",
        password: "",
      });
    } else {
      alert("Harap isi semua kolom!");
    }
  };

  return (
    <div className="mainContainer">
      <div className="box">
        <div className="title-box">
          <button className="login" to="/register">
            Register
          </button>
        </div>
        <br />
        <br />
        <div className="input-field" id="login">
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              className="input-text"
              placeholder="Email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <input
              className="input-text"
              type="text"
              placeholder="Username"
              id="username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
            <input
              className="input-text"
              type="password"
              placeholder="Password"
              id="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <br />
            <div id="r">
              <center>
                <button type="submit" id="r" className="r">
                  Register
                </button>
              </center>
            </div>
          </form>
          <br />
          <center>
            <div>
              <div>
                Sudah punya akun?
                <div></div>
                <Link id="p" className="register" to="/">
                  Log In
                </Link>
              </div>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Register;

