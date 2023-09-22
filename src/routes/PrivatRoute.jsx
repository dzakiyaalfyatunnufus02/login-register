import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const location = useLocation();
  if (!localStorage.getItem("UserRole")) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return children;
}

export default PrivateRoute;
