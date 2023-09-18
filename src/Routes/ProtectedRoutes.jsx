import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/AuthProvider";

export default function ProtectedRoutes({ children }) {
  const { user } = useContext(Context);

  if (!user) {
    return <Navigate to="/login" replace />;
  } else {
    return children;
  }
}
