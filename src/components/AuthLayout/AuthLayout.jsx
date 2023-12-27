import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
function AuthLayout({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);
  useEffect(() => {
    if (authentication && !authStatus) {
      navigate("/login");
    } else if (!authentication && authStatus) {
      navigate("/");
    }
    setLoading(false);
  }, [navigate, authStatus, authentication]);
  return loading ? (
    <h1>{loading}</h1>
  ) : (
    <>
      <HeaderComponent />
      {children}
    </>
  );
}

export default AuthLayout;
