import React, { useState } from "react";
import { IntlProvider } from "react-intl";

import { LOCALES } from "../../i18n/locales";
import French from "../../lang/fr.json";
import Ukrainian from "../../lang/ua.json";
import English from "../../lang/en.json";
import Russian from "../../lang/ru.json";

export const Context = React.createContext({
  value: { locale: "en", selectLanguage: () => {} },
} as any);

const local = navigator.language;

let lang: any;
if (local === LOCALES.ENGLISH) {
  lang = English;
} else {
  if (local === LOCALES.FRENCH) {
    lang = French;
  } else if (local === LOCALES.UKRAINIAN) {
    lang = Ukrainian;
  }
}

const Wrapper = (props: any) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);

  function selectLanguage(e: any) {
    console.log(e.target.value);
    const newLocale = e.target.value;
    setLocale(newLocale);
    if (newLocale === LOCALES.ENGLISH) {
      setMessages(English);
    } else if (newLocale === LOCALES.FRENCH) {
      setMessages(French);
    } else if (newLocale === LOCALES.UKRAINIAN) {
      setMessages(Ukrainian);
    } else if (newLocale === LOCALES.RUSSIAN) {
      setMessages(Russian);
    }
  }
  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};
export default Wrapper;