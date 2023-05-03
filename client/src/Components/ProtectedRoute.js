import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  isAuthentication,
  outlet,
  redirectPath = "/",
}) {
  if (isAuthentication) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: redirectPath }} />;
  }
}
