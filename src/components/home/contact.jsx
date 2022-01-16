import React from "react";

import { Container, Row, Col } from "reactstrap";
import "./contact.css";

function Contact(props) {
  const { t } = props;

  return (
      <div id="contact">
        <Container>
          <Col md="8">
            <Row>
              <div className="section-title">
                <h2>{t("contact.getInTouch")}</h2>
              </div>
            </Row>
          </Col>
          <Col md={{size: 3}} className="contact-info">
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> {t("contact.address")}:
                </span>{" "}
                {t("contact.ourAddress")}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> {t("phone")}:
                </span>{" "}
                {t("contact.phone")}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> {t("email")}:
                </span>{" "}
                {t("contact.email")}
              </p>
            </div>
          </Col>
          <Col md="12">
            <Row>
              <div className="social">
                <ul>
                  <li>
                    <a
                      href={t("contact.facebook")}
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={t("contact.twitter")}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={t("contact.youtube")}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Row>
          </Col>
        </Container>
      </div>
  );
}

export default Contact;
