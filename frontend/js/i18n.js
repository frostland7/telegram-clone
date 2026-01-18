// frontend internationalization system

const i18n = {
    // Language bundles
    en: {
        greeting: 'Hello',
        farewell: 'Goodbye',
    },
    es: {
        greeting: 'Hola',
        farewell: 'Adiós',
    },
    // Add more languages as needed

    // Function to translate based on the key and language
    translate: function (key, lang = 'en') {
        return this[lang][key] || key;
    }
};

export default i18n;