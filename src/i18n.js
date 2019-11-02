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
                    AddMenu: { label: 'Add' },
                    Address: { label: 'Address' },
                    City:{ label: 'City' },
                    Country: { label: 'Country' },
                    Description: { label: 'Description' },
                    DeliveryValue: { label: 'Delivery Value' },
                    DontHaveAccount: { label: 'Don\'t have an account? Sign Up' },
                    Error:{
                        Name:{label: 'the name must be between 4 and 30 characters.'}
                    },
                    FchSince: { label: 'Since' },
                    FchUntil: { label: 'Until' },
                    FirstName: { label: 'First Name' },
                    ForgotPassword: { label: 'Forgot password?' },
                    LastName: { label: 'Last Name' },
                    Mail: { label: 'E-Mail' },
                    MaxQuantity: { label: 'Maximum quantity' },
                    MaxQuantityPerDay: { label: 'Maximum quantity per day' },
                    MenuRegister: { label: 'Menu Register' },
                    MinQuantity: { label: 'Minimum quantity' },
                    Password: { label: 'Password'},
                    Phone: { label: 'Phone'},
                    Price: { label: 'Price'},
                    PriceCantMax: { label: 'Price exceeded the maximum quantity' },
                    PriceCantMin: { label: 'Price exceeded the minimum quantity' },
                    Register: { label: 'Register' },
                    RememberMe: { label: 'Remember Me'},
                    SignIn: { label: 'Sign In' },
                    State: { label: 'State' },
                    TermsAndConditions: { label: 'I agree terms and conditions' },
                    UrlImage: { label: 'Image URL'},
                    user: { label: 'user' },
                    User: { label: 'User' },
                    UserRegister: { label: 'User Register' },
                    ZipCode: { label: 'Zip Code' },
                },
            },
            es: {
                translation: {
                    AddMenu: { label: 'Agregar Menú' },
                    Address: { label: 'Dirección'},
                    City:{ label: 'Ciudad' },
                    Country: { label: 'País' },
                    Description: { label: 'Descripción' },
                    DeliveryValue: { label: 'Valor del Delivery' },
                    DontHaveAccount: { label: 'No tengo cuenta. Registrarme.' },
                    Error:{
                        Name:{label: 'El nombre debe tener entr 4 y 30 letras.'}
                    },
                    FchSince: { label: 'Desde' },
                    FchUntil: { label: 'Hasta' },
                    FirstName: { label: 'Nombre' },
                    ForgotPassword: { label: 'Olvidé mi contraseña' },
                    LastName: { label: 'Apellido' },
                    Mail: { label: 'Mail' },
                    MaxQuantity: { label: 'Cantidad máxima' },
                    MaxQuantityPerDay: { label: 'Cantidad máxima por día' },
                    MenuRegister: { label: 'Registrar Menú' },
                    MinQuantity: { label: 'Cantidad mínima' },
                    Password: { label: 'Contraseña'},
                    Phone: { label: 'Telefono'},
                    Price: { label: 'Precio'},
                    PriceCantMax: { label: 'Precio superado la cantidad máxima' },
                    PriceCantMin: { label: 'Precio superado la cantidad mínima' },
                    Register: { label: 'Registro', },
                    RememberMe: { label: 'Recordar'},
                    SignIn: {label: 'Ingresar' },
                    State: { label: 'Provicia' },
                    TermsAndConditions: { label: 'Acepto los terminos y condiciones' },
                    UrlImage: { label: 'URL de imágen'},
                    user: { label: 'usuario' },
                    User: { label: 'Usuario' },
                    UserRegister: { label: 'Registro de Usuario' },
                    ZipCode: { label: 'Código Postal' },
                },
            },
        },
    })

export default i18next
