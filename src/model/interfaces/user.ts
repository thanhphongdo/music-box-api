export interface AuthDataInterface {
    email?: string;
    google?: {
        id: string;
        id_token: string;
        access_token: string;
    }
}