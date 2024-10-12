import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import en from "./locals/en.json"
import fr from "./locals/fr.json"

i18n
    .use(LanguageDetector)
    .use(initReactI18next) // Liaison avec React
    .init({
        resources: {
            en: {
                translation: en
            },
            fr: {
                translation: fr
            },
        },
        lng: 'fr', // Langue par défaut
        fallbackLng: 'fr', // Si la langue choisie n'est pas disponible
        interpolation: {
            escapeValue: false, // React s'occupe de la sécurité XSS
        },
    });

export default i18n;