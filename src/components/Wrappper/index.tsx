import React, { useState } from "react";
import { IntlProvider } from "react-intl";

import { LOCALES } from "../../i18n/locales";
import Ukrainian from "../../lang/ua.json";
import English from "../../lang/en.json";

export const Context = React.createContext({
  value: { locale: "en", selectLanguage: () => {} },
} as any);

const local = navigator.language;

let lang: any;
if (local === LOCALES.ENGLISH) {
  lang = English;
} else {
  if (local === LOCALES.UKRAINIAN) {
    lang = Ukrainian;
  }
}

const Wrapper = (props: any) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);

  function selectLanguage(e: any) {
    const newLocale = e.target.value;
    setLocale(newLocale);
    if (newLocale === LOCALES.ENGLISH) {
      setMessages(English);
    } else if (newLocale === LOCALES.UKRAINIAN) {
      setMessages(Ukrainian);
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
