import React, { useEffect } from "react";
import "./LogoutButton.css";
import authService from "../../firebase/firebaseAuthentication";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout as authLogout } from "../../store/authSlice";
function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    authService.logout().then((data) => {
      dispatch(authLogout());
      navigate("/signup");
    });
  };
  return (
    <div>
      <button onClick={logoutHandler} className="logoutButton">
        Sign Out
      </button>
    </div>
  );
}

export default LogoutButton;
