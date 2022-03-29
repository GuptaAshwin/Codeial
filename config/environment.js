

const development = {
    name: 'development',
    asset_path: './assets',
    session_cookie_key: 'blahsomething',
    db: 'TODOLIST_development',
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'ashwinguptaak',
            pass: 'pcdsxsqerjgrndiw'
        }
    },
    google_clientID: "500922189174-dca9c77c2fsm0o7q9s8588874t6ght31.apps.googleusercontent.com",
    google_clientSecret: "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",
    google_callbackURL: "http://codeial.com/users/auth/google/callback",
    jwt_secret: 'codeial'
}



const production = {
    name: process.env.CODIEL_ENVIRONMENT,
    asset_path: process.env.CODEIAL_ASSET_PATH,
    session_cookie_key: process.env.CODEIAL_SESSION_COOKIE_KEY,
    db: process.env.CODEIAL_DB,
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'ashwinguptaak',
            pass: 'pcdsxsqerjgrndiw'
        }
    },
    google_clientID: process.env.GOOGLE_CLIENTID,
    google_clientSecret: process.env.GOOGLE_CLIENTSECRETKEY,
    google_callbackURL: process.env.GOOGLE_CALLBACKURL,
    jwt_secret: process.env.CODEIAL_JWT_SECRET
}

// console.log(production.google_callbackURL);


module.exports = eval(process.env.CODIEL_ENVIRONMENT) == undefined ? development : eval(process.env.CODIEL_ENVIRONMENT);