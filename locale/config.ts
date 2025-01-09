import { en } from "./en";
import { th } from "./th";

export default defineI18nConfig(() => ({
  legacy: false,
  locales: [
    { code: "en", language: "en-US" },
    { code: "fr", language: "fr-FR" },
    { code: "es", language: "es-ES" },
    { code: "it", language: "it-IT" },
    { code: "pt", language: "pt-BR" },
    { code: "de", language: "de-DE" },
    { code: "th", language: "th-TH" },
  ],
  defaultLocale: "th",
  messages: {
    en,
    th,
  },
}));
