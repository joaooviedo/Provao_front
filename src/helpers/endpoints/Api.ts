import { LocalStorageKeys } from "types/LocalStorageKeys";
import { LocalStorageHelper } from "helpers/LocalStorageHelper";

type args = [input: RequestInfo, init?: RequestInit | undefined];

function requestInterceptor(config: RequestInit | undefined) {
    if(config){
        const token = {
            Authorization: `Bearer ${LocalStorageHelper.get(LocalStorageKeys.TOKEN)}`,
        };
        config.headers = {...config.headers, ...token};
    }
}

export const Api = async (...args: args): Promise<Response> => {
    let [url, config] = args;
    requestInterceptor(config);
    const response = await fetch(url, config);
    return response;
}