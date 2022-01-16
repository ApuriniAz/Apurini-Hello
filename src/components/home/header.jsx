import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "./header.css";

import i18n from "../../i18n";

function Header(props) {
  const { t } = props;

  const currentLanguage = i18n.language;
  const [badgeLanguage, setBadgeLanguage] = useState("en");

  useEffect(() => {
    setBadgeLanguage(currentLanguage);
  }, [currentLanguage]);
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <Container>
            <Row>
              <Col md={{ size: 6, offset: 1 }} className='intro-text'>
                <h1>{t("header.title")}</h1>
                <p>{t("header.paragraph")}</p>
                <p className='mobile-app-badge-text'>{t("header.appMessage")}</p>
                <a className='google-play-badge' href='#features'>
                  <img
                    src={`img/badges/${badgeLanguage}/google-play-badge.png`}
                    alt='googlePlayBadge'
                    className='google-play-badge-img'
                  ></img>
                </a>
                <a href='#features' className='app-store-badge'>
                  <img
                    src={`img/badges/${badgeLanguage}/app-store-badge.svg`}
                    alt='appStoreBadge'
                    className='app-store-badge-img'
                  ></img>
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </header>
  );
}

export default Header;
