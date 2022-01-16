import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Progress } from "reactstrap";

import PageOne from "./pageOne";
import PageTwo from "./pageTwo";
import PageThree from "./pageThree";

function OnBoarding(props) {
  const { t } = props;
  const { show, setShow } = props;
  const [pageIndicator, setPageIndicator] = useState("pageOne");

  const toggle = () => setShow(!show);
  return (
    <div>
      <Modal centered backdrop='static' isOpen={show} toggle={toggle}>
        <ModalHeader toggle={toggle}>{pageIndicator}</ModalHeader>
        <ModalBody>
          <OnBoardingForms setPageIndicator={setPageIndicator} pageIndicator={pageIndicator} t={t} />
        </ModalBody>
        <ModalFooter>
          <Button color='secondary' onClick={toggle}>
            {t("cancel")}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

const OnBoardingForms = (props) => {
  const { pageIndicator, setPageIndicator, t } = props;
  const [progressIndicator, setProgressIndicator] = useState(0);

  useEffect(() => {
    setProgressIndicator(pageIndicator === "pageOne" ? "0" : pageIndicator === "pageTwo" ? "33" : "66");
  }, [pageIndicator]);

  return (
    <div>
      <Progress striped color='info' value={`${progressIndicator}`} />
      {pageIndicator === "pageOne" ? (
        <PageOne setPageIndicator={setPageIndicator} t={t} />
      ) : pageIndicator === "pageTwo" ? (
        <PageTwo setPageIndicator={setPageIndicator} t={t} />
      ) : pageIndicator === "pageThree" ? (
        <PageThree setPageIndicator={setPageIndicator} t={t} />
      ) : (
        <PageOne setPageIndicator={setPageIndicator} t={t} />
      )}
    </div>
  );
};

export default OnBoarding;
