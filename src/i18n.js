import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend) //не работает:/
  .init({
    debug: true,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          Filters: {
            Active: 'Active',
            Completed: 'Completed',
            All: 'All'
          }
        }
      },
      ru: {
        translation: {
          Filters: {
            Active: 'Активные',
            Completed: 'Завершённые',
            All: 'Все'
          }
        }
      }
    }
  });

export default i18n;
