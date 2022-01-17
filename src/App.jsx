import dotenv from "dotenv";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import { withTranslation } from "react-i18next";
import i18n from "./i18n.js";

import Navigation from "./components/navigation/navigation";
import Home from "./components/home/home.jsx";

dotenv.config();

function App({ t }) {

  const [language, setLanguage] = useState("en");
  const [languageOptions, setLanguageOptions] = useState([{ value: "en", label: "EN" }]);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  useEffect(() => {
    const languageOptionsString = process.env.REACT_APP_LANGUAGE_OPTIONS;
    try {
      var languageOptionsJson = JSON.parse(languageOptionsString);
      setLanguageOptions(languageOptionsJson);
    } catch (error) {
      // TODO: add error handling here
    }
  }, []);

  return (
    <>
      <Navigation t={t} setLanguage={setLanguage} currentLanguage={language} languageOptions={languageOptions} />
        <Route exact path='.'>
          <Home t={t} />
        </Route>
    </>
  );
}

export default withTranslation()(App);
