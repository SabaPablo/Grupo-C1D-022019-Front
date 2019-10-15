import i18next from 'i18next';

i18next
    .init({
        interpolation: {
            // React already does escaping
            escapeValue: false,
        },
        lng: 'en', // 'en' | 'es'
        // Using simple hardcoded resources for simple example
        resources: {
            en: {
                translation: {
                    Address: { label: 'Address' },
                    City:{ label: 'City' },
                    Country: { label: 'Country' },
                    DontHaveAccount: { label: 'Don\'t have an account? Sign Up' },
                    FirstName: { label: 'First Name' },
                    ForgotPassword: { label: 'Forgot password?' },
                    LastName: { label: 'Last Name' },
                    Mail: { label: 'E-Mail' },
                    Password: { label: 'Password'},
                    Register: { label: 'Register' },
                    RememberMe: { label: 'Remember Me'},
                    SignIn: { label: 'Sign In' },
                    State: { label: 'State' },
                    TermsAndConditions: { label: 'I agree terms and conditions' },
                    user: { label: 'user' },
                    User: { label: 'User' },
                    UserRegister: { label: 'User Register' },
                    ZipCode: { label: 'Zip Code' },
                },
            },
            es: {
                translation: {
                    Address: { label: 'Dirección'},
                    City:{ label: 'Ciudad' },
                    Country: { label: 'País' },
                    DontHaveAccount: { label: 'No tengo cuenta. Registrarme.' },
                    FirstName: { label: 'Nombre' },
                    ForgotPassword: { label: 'Olvidé mi contraseña' },
                    LastName: { label: 'Apellido' },
                    Mail: {label: 'Mail' },
                    Password: { label: 'Contraseña'},
                    Register: { label: 'Registro', },
                    RememberMe: { label: 'Recordar'},
                    SignIn: {label: 'Ingresar' },
                    State: { label: 'Provicia' },
                    TermsAndConditions: { label: 'Acepto los terminos y condiciones' },
                    user: { label: 'usuario' },
                    User: { label: 'Usuario' },
                    UserRegister: { label: 'Registro de Usuario' },
                    ZipCode: { label: 'Código Postal' },
                },
            },
        },
    })

export default i18next
