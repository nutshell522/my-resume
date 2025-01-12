import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'zh',
    lng: 'zh',
    debug: true,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    ns: ['nav', 'home', 'about', 'projects', 'contact'],
    defaultNS: 'home',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;