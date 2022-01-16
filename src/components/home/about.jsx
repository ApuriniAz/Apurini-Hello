import React from "react";

import { Container, Row, Col } from "reactstrap";

function About(props) {
  const { t } = props;
  return (
    <div id='about'>
      <Container>
        <Row>
          <Col xs='12' md='6'>
            <img src='img/about-trimmed.png' className='img-responsive' alt='' />{" "}
          </Col>
          <Col xs='8' md='6'>
            <div className='about-text'>
              <h2>{t("about.title")}</h2>
              <p>{t("about.paragraph")}</p>
              <h3>{t("about.title2")}</h3>
              <div className='list-style'>
                <Col lg='12' sm='12' xs='12'>
                  <ul>
                    {t("about.why", { returnObjects: true })
                      ? t("about.why", { returnObjects: true }).map((d, i) => <li key={`${d}-${i}`}>{d}</li>)
                      : "loading"}
                  </ul>
                </Col>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
