import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./onBoarding.css";

export default function PageThree(props) {
  const { t, setPageIndicator } = props;

  const changePage = () => {
    setPageIndicator("pageTwo");
  };

  return (
    <Form className='onboarding-form'>
      <FormGroup className='login-form-input'>
        <Label for='exampleEmail'>{t("email")}</Label>
        <Input type='email' name='email' id='exampleEmail' placeholder='with a placeholder' />
      </FormGroup>
      <FormGroup className='login-form-input'>
        <Label for='examplePassword'>{t("password")}</Label>
        <Input type='password' name='password' id='examplePassword' placeholder='password placeholder' />
      </FormGroup>
      <div className='on-boarding-button-block'>
        <Button color='primary' className='onBoarding-page-change-button' onClick={() => changePage()}>
          {t("user.onBoarding.backward")}
        </Button>
      </div>
    </Form>
  );
}
