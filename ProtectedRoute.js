import React from "react";
import { useUser } from "../context/UserAuth";
import { Navigate } from "react-router-dom";
const ProtectedRoute = (
  { children }
  ) => {
  const {user}  = useUser();

  console.log("Check user in Private: ", user);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
