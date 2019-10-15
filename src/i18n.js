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
                    UserRegister: { label: 'User Register'},
                    Register: { label: 'Register', },
                    user: { label: 'user', },
                    User: { label: 'User', },
                    FirstName: { label: 'First Name' },
                    LastName: { label: 'Last Name'},
                    Address: { label: 'Address'},
                    ZipCode: { label: 'Zip Code' },
                    Country: { label: 'Country' },
                    City:{ label: 'City' },
                    State: { label: 'State' },
                    TermsAndConditions: { label: 'I agree terms and conditions'},
                    Mail: {label: 'E-Mail'}
                },
            },
            es: {
                translation: {
                    UserRegister: { label: 'Registro de Usuario'},
                    Register: { label: 'Registro', },
                    user: { label: 'usuario', },
                    User: { label: 'Usuario', },
                    FirstName: { label: 'Nombre' },
                    LastName: { label: 'Apellido'},
                    Address: { label: 'Dirección'},
                    ZipCode: { label: 'Código Postal' },
                    Country: { label: 'País' },
                    City:{ label: 'Ciudad' },
                    State: { label: 'Provicia' },
                    TermsAndConditions: { label: 'Acepto los terminos y condiciones'},
                    Mail: {label: 'Mail'}
                },
            },
        },
    })

export default i18next
