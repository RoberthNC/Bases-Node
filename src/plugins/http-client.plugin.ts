import axios from 'axios';

export const httpClientPlugin = {
    get: async(url:string) => {
        const { data } = await axios.get(url);
        return data;
    },
    post: async(url:string, body:any) => {},
    patch: async(url:string, body:any) => {},
    delete: async(url:string) => {}
}