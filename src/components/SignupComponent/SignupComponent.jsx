import React, { useState } from "react";
import "./SignupComponent.css";
import Input from "../Input/Input";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import authService from "../../firebase/firebaseAuthentication";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../../store/authSlice";
import Button from "../Button/Button";
function SignupComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const signup = async (data) => {
    setError("");
    try {
      const userData = await authService.createUser(data);
      if (userData) {
        dispatch(authLogin(userData));
        navigate("/login");
      }
    } catch (error) {
      setError(error);
    }
  };

  const handleSignup = (e) => {
    const data = { email, password };
    e.preventDefault();
    signup(data);
  };

  return (
    <section className="signupComponent">
      <div className="signupComponentHeader">
        <Logo />
        <h3 className="signupComponentGreetings">Welcome</h3>
        <p className="signupComponentDescription">
          <span className="signupComponentDescriptionSpan">Sign Up</span> to
          flexWheels to continue to flexWheels.
        </p>
      </div>
      <form action="" onSubmit={handleSignup} className="signupForm">
        <div className="signupInputFields">
          <Input
            label="Name "
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            formContext="signup"
          />
          <Input
            label="Email "
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            formContext="signup"
            required="required"
          />
          <Input
            label="Password "
            placeholder="Protect your account"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            formContext="signup"
            required="required"
          />
        </div>
        <Button name="Continue" className="signupButton" />
      </form>
      <p>
        Already have an account ?{" "}
        <Link to="/login">
          <button className="signupComponentLoginLink">Login</button>
        </Link>
      </p>
    </section>
  );
}

export default SignupComponent;
