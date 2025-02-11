declare global {
  interface LanguageOptions {
    name: string;
    code: "en" | "th";
    locale?: string;
    icon?: string;
  }
}

export {};
