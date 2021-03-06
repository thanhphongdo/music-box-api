export interface ConfigInterface {
    envName: string;
    parseServer: {
        appName?: string;
        mountPath?: string;
        databaseURI?: string;
        cloud?: string;
        appId?: string;
        masterKey?: string;
        port?: number;
        serverURL?: string;
        publicServerURL?: string;
        liveQuery?: {
            classNames: string[];
        },
        maxUploadSize?: string;
        emailAdapter?: {
            module: string,
            options: {
                port: number,
                host: string,
                user: string,
                password: string,
                fromAddress: string
            }
        }
    };
    dashboardUrl?: string;
    dashboardUser?: Array<{
        user?: string;
        pass?: string;
    }>;
    [key: string]: any;
    addDocs?: boolean;
    soundCloudClienId: string;
}