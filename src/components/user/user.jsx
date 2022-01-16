import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, Container, Row, Alert, Spinner } from "reactstrap";

import { loginUser, useAuthState, useAuthDispatch } from "../../contexts/authContext/index.js";

import OnBoarding from "./onBoarding/onBoarding.jsx";
// import { login } from "../../data/user.js";

import "./user.css";

function User(props) {
  const { t, getOnBoard } = props;
  const [loginError, SetLoginError] = useState(null);

  const { userDetails, loading, errorMessage } = useAuthState(); //read the values of loading and errorMessage from context

  const toggleErrorOff = () => {
    SetLoginError(null);
  };

  /**
   * TODO:
   * 1- change alert css so it does not move the rows when it appears
   * 2- fix the whole css so it shows close buttons correctly!
   * 3- add form validation for the login form
   */

  return (
    <Container>
      {loginError !== null ? (
        <Row noGutters className='alert-row'>
          <Alert color='warning' toggle={() => toggleErrorOff()}>
            {`${t("user.loginError")} ${loginError.message}`}
          </Alert>
        </Row>
      ) : null}
      {!loading && !errorMessage && userDetails && userDetails.length > 0 ? (
        <Row>Welcome {userDetails}</Row>
      ) : (
        <LoginForms t={t} getOnBoard={getOnBoard} SetLoginError={SetLoginError} />
      )}
    </Container>
  );
}

function LoginForms(props) {
  const { getOnBoard, t, SetLoginError } = props;

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showSpinner, setShowSpinner] = useState(false); //TODO: show the spinner during signIn

  const dispatch = useAuthDispatch();
  const { loading, errorMessage } = useAuthState(); //read the values of loading and errorMessage from context

  useEffect(() => {
    setShowLoginModal(getOnBoard == "true");
  }, [getOnBoard]);

  useEffect(() => {
    if (loading) {
      setShowSpinner(true);
    } else {
      setShowSpinner(false);
    }
  }, [loading]);

  useEffect(() => {
    if (errorMessage) {
      SetLoginError({ message: `Failed to connect to the server: ${errorMessage}` });
    }
  }, [errorMessage]);

  const attemptLogin = async () => {
    if (!userName || userName.length < 3) {
      SetLoginError({ message: "User name should be at least three characters" });
      return;
    }
    if (!password || password.length < 3) {
      SetLoginError({ message: "Password should be at least three characters" });
      return;
    }

    const payload = { userName, password };

    try {
      let response = await loginUser(dispatch, payload);
      if (!response.user) return;
      // props.history.push("/dashboard"); //navigate to dashboard on success
    } catch (error) {
      SetLoginError({ message: `Failed to connect to the server: ${error.message}` });
    }
  };

  return (
    <>
      <Row>
        <Form className='login-form'>
          <FormGroup className='login-form-input'>
            <Label for='exampleEmail'>{t("email")}</Label>
            <Input
              type='email'
              name='email'
              id='exampleEmail'
              placeholder='with a placeholder'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </FormGroup>
          <FormGroup className='login-form-input'>
            <Label for='examplePassword'>{t("password")}</Label>
            <Input
              type='password'
              name='password'
              id='examplePassword'
              placeholder='password placeholder'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          {showSpinner ? (
            <Spinner color='primary' type='grow'/>
          ) : (
            <Button color='primary' className='login-button' onClick={attemptLogin}>
              {t("user.login")}
            </Button>
          )}
        </Form>
      </Row>
      <Row className='onBoarding-button'>
        <h5>{t("user.notAMember")}</h5>
        <Button color='primary' onClick={() => setShowLoginModal(true)}>
          {t("user.onBoarding.onBoarding-title")}
        </Button>
        <OnBoarding show={showLoginModal} setShow={setShowLoginModal} t={t} />
      </Row>
    </>
  );
}

export default User;
