import React from "react";
import "./SignupPage.css";
import SignupComponent from "../../components/SignupComponent/SignupComponent";
import Container from "../../components/Container/Container";
function SignupPage() {
  return (
    <Container className="signupPage" height="100%">
      <SignupComponent />
    </Container>
  );
}

export default SignupPage;
