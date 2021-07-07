import { ConfigInterface } from './config_interface';

export var Config:ConfigInterface = {
    envName: 'PROD',
    parseServer:{
        appId: 'music_box.id.prod',
        mountPath: '/parse',
        appName: 'music_box',
        cloud: '/cloud/main.js',
        databaseURI: 'mongodb+srv://root:root@cluster0.cjzgg.mongodb.net/music_box',
        masterKey: 'masterkey',
        port: 1337,
        serverURL: 'http://localhost:1337'
    },
    dashboardUser: [
        {
            user: 'root',
            pass: 'r00t'
        }
    ],
    dashboardUrl: '/-board',
    addDocs: false,
    soundCloudClienId: 'p0qXnO6vGPGnUE8mStvEVVelga3zO3sy'
}