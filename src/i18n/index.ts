import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import HttpBackend from "i18next-http-backend"

i18n
  .use(HttpBackend) // 👈 carga traducciones desde archivos
  .use(initReactI18next)
  .init({
    lng: "en", // idioma inicial
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", 
      // 👆 ruta de los archivos de traducción
    },
  })

export default i18n
