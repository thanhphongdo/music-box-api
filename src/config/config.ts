import { ConfigInterface } from './config_interface';

export var Config:ConfigInterface = {
    envName: 'DEFAULT',
    parseServer:{
        appId: 'app.id',
        mountPath: '/parse',
        appName: 'music_box',
        cloud: '/cloud/main.js',
        databaseURI: 'mongodb://root:1nn0r1a@localhost:27017/parse?authSource=admin',
        masterKey: 'masterkey',
        port: 1337,
        serverURL: 'http://localhost:1337'
    },
    soundCloudClienId: 'atcX6KFaz2y3iq7fJayIK779Hr4oGArb'
}