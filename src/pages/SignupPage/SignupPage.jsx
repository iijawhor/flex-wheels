import React from "react";
import "./SignupPage.css";
import SignupComponent from "../../components/SignupComponent/SignupComponent";
import Container from "../../components/Container/Container";
function SignupPage() {
  return (
    <Container className="signupPage">
      <SignupComponent />
    </Container>
  );
}

export default SignupPage;
