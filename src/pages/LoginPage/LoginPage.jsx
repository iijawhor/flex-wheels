import React from "react";
import "./LoginPage.css";
import LoginComponent from "../../components/LoginComponent/LoginComponent";
import Container from "../../components/Container/Container";
function LoginPage() {
  return (
    <Container className="loginPage">
      <LoginComponent />
    </Container>
  );
}

export default LoginPage;
