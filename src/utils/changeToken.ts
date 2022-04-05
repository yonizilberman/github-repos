import { config } from "../https/config";

export const changeToken = (newToken: string): void => {
    if (!newToken) return;

    window.localStorage.setItem("token", newToken);
    config.headers.Authorization = `token ${newToken}`;
};
