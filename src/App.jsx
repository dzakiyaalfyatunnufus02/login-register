import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./Login.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./login";
import Home from "./home";
import PrivateRoute from "./routes/PrivatRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        {/* <Route path='/home' element={<Home />}/> */}
        {/* <Route path='/page' element={<Page/>}></Route> */}
      </Routes>
    </BrowserRouter>
  );
  //  <Routes>
  {
    /* <BrowserRouter>
   <Route path='/page' element={<Page/>}></Route>
 </Routes>
 </BrowserRouter> */
  }
};

export default App;
