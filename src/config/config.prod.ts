import { ConfigInterface } from './config_interface';

export var Config: ConfigInterface = {
    envName: 'PROD',
    parseServer: {
        appId: 'music_box.id.prod',
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
    dashboardUser: [
        {
            user: 'root',
            pass: 'r00t'
        }
    ],
    dashboardUrl: '/-board',
    addDocs: false,
    soundCloudClienId: 'atcX6KFaz2y3iq7fJayIK779Hr4oGArb'
}