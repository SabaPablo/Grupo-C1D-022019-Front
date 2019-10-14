import i18next from 'i18next';

i18next
    .init({
        interpolation: {
            // React already does escaping
            escapeValue: false,
        },
        lng: 'es', // 'en' | 'es'
        // Using simple hardcoded resources for simple example
        resources: {
            en: {
                translation: {
                    Register: { label: 'Register', },
                    user: { label: 'user', },
                    User: { label: 'User', },
                },
            },
            es: {
                translation: {
                    Register: { label: 'Registro', },
                    user: { label: 'usuario', },
                    User: { label: 'Usuario', },
                },
            },
        },
    })

export default i18next
