import dotenv from "dotenv";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import { withTranslation } from "react-i18next";
import i18n from "./i18n.js";

import Navigation from "./components/navigation/navigation";
import Home from "./components/home/home.jsx";
import User from "./components/user/user.jsx";

import { AuthProvider } from "./contexts/authContext/context.jsx";

dotenv.config();

// A custom hook that builds on useLocation to parse the query string.
function useQuery() {
  if (useLocation()) {
    return new URLSearchParams(useLocation().search);
  }
  return null;
}

function App({ t }) {
  let query = useQuery();

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

  /**
   * TODO:
   * 1- implement secure rauting for the routs!!
   */

  return (
    <AuthProvider>
      <Navigation t={t} setLanguage={setLanguage} currentLanguage={language} languageOptions={languageOptions} />
      <Switch>
        <Route exact path='/'>
          <Home t={t} />
        </Route>
        <Route exact path='/user'>
          <User t={t} getOnBoard={query.get("getOnBoard")} />
        </Route>
      </Switch>
    </AuthProvider>
  );
}

export default withTranslation()(App);
