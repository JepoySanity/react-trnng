import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';



i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources:{
        en: {
            translation: {
                "nav-title": "Members Listing",
                "logout": "Logout",
                "list-of-members": "LIST OF MEMBERS",
                "create-new": "New",
                "no-members-available": "No members available"
            }
        },
        jp: {
            translation: {
                "nav-title": "メンバーリスト",
                "logout":"ログアウト",
                "list-of-members": "メンバー一覧",
                "create-new": "新しく作る",
                "no-members-available": "利用可能なメンバーがいません"
            }
        }
    },
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    }
  });


export default i18n;