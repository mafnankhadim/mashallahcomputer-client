import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

function checkAuth() {
  try {
    return Boolean(localStorage.getItem("adminToken"));
  } catch (e) {
    return false;
  }
}

function ProtectedRoute({ children }) {
  const location = useLocation();
  const [authed, setAuthed] = useState(() => checkAuth());

  useEffect(() => {
    const handler = () => setAuthed(checkAuth());
    window.addEventListener("authChanged", handler);
    return () => window.removeEventListener("authChanged", handler);
  }, []);

  if (!authed) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}

export default ProtectedRoute;
