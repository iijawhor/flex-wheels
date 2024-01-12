import React, { useState } from "react";
import "./LoginComponent.css";
import "./LoginComponentResponsive.css";
import Input from "../Input/Input";
import Logo from "../Logo/Logo";
import authService from "../../firebase/firebaseAuthentication";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login as authLogin } from "../../store/authSlice";
import Button from "../Button/Button";
function LoginComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      console.log("sesstion :: ", session);
      if (session) {
        const userData = await authService.getCurrentUser();
        console.log("userData :: ", userData);
        if (userData) {
          dispatch(authLogin(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handlelogin = (e) => {
    const data = { email, password };
    e.preventDefault();
    login(data);
  };

  return (
    <section className="loginComponent">
      <div className="loginComponentHeader">
        <Logo />
        <h3 className="loginComponentGreetings">Welcome</h3>
        <p className="loginComponentDescription">
          <span className="loginComponentDescriptionSpan">Log In</span> to
          flexWheels to continue to flexWheels.
        </p>
      </div>
      <form action="" onSubmit={handlelogin} className="loginForm">
        <div className="loginInputFields">
          <Input
            label="Email "
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            formContext="login"
            type="text"
          />
          <Input
            label="Password "
            placeholder="Unlock your account"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            formContext="login"
            type="password"
          />
        </div>
        <Button name="Continue" className="loginButton" />
      </form>
      <p>
        Don't have an account ?
        <Link to="/signup">
          <button className="loginComponentLoginLink">Signup</button>
        </Link>
      </p>
      {error && <p>{error}</p>}
    </section>
  );
}

export default LoginComponent;
