import i18n from "i18next";
import { initReactI18next  } from "react-i18next";

import translationEN from './locales/en/translation.json';
import translationSE from './locales/se/translation.json';
import translationFA from './locales/fa/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  se: {
    translation: translationSE
  },
  fa: {
    translation: translationFA
  }
};

i18n
  .use(initReactI18next ) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    // keySeparator: '.', // we do use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;