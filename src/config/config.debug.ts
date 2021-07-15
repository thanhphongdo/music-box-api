import { ConfigInterface } from './config_interface';

export var Config: ConfigInterface = {
    envName: 'DEBUG',
    parseServer: {
        appId: 'music_box.id.dev',
        mountPath: '/parse',
        appName: 'music_box',
        cloud: '/cloud/main.js',
        databaseURI: 'mongodb+srv://root:root@cluster0.cjzgg.mongodb.net/music_box',
        masterKey: 'masterkey',
        port: 1337,
        serverURL: 'http://localhost:1337',
        publicServerURL: 'http://localhost:1337',
        emailAdapter: {
            module: 'parse-smtp-template',
            options: {
                port: 587,
                host: "smtp.gmail.com",
                user: "email_here@gmail.com",
                password: "password_here",
                fromAddress: 'email_here@gmail.com'
            }
        }
    },
    dashboardUrl: '/-board',
    addDocs: true,
    soundCloudClienId: 'p0qXnO6vGPGnUE8mStvEVVelga3zO3sy'
}