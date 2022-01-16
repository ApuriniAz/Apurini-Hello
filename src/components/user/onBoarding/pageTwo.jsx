import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import "./onBoarding.css";

export default function PageTwo(props) {
  const { t, setPageIndicator } = props;

  const changePage = (nextPage) => {
    setPageIndicator(nextPage === "forward" ? "pageThree" : "pageOne");
  };

  return (
    <Form className='onboarding-form'>
      <FormGroup className='onBoarding-form-input'>
        <Label for='firstName'>{t("user.onBoarding.firstName")}</Label>
        <Input type='text' name='firstName' id='firstName' placeholder={t("email")} />
      </FormGroup>
      <FormGroup className='onBoarding-form-input'>
        <Label for='lastName'>{t("user.onBoarding.lastName")}</Label>
        <Input type='text' name='lastName' id='lastName' placeholder={t("user.onBoarding.lastName")} />
      </FormGroup>
      <FormGroup className='onBoarding-form-input'>
        <Label for='email'>{t("user.onBoarding.email")}</Label>
        <Input type='email' name='email' id='email' placeholder={t("user.onBoarding.email")} />
      </FormGroup>
      <div className='on-boarding-button-block'>
        <Button color='primary' className='onBoarding-page-change-button' onClick={() => changePage("backward")}>
          {t("user.onBoarding.backward")}
        </Button>
        <Button
          color='primary'
          className='onBoarding-page-change-button to-right'
          onClick={() => changePage("forward")}
        >
          {t("user.onBoarding.forward")}
        </Button>
      </div>
    </Form>
  );
}
