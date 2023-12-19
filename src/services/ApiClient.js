import axios, {  Method } from "axios";
import Cookies from "js-cookie";

export class ApiClient {
    // region MakeAPICall
    async makeApiCall(method, url, handleError,params){
        try {
            // const token = Cookies.get('token')

            const config = {
                method: method,
                url: url,
                data: method !== 'GET' ? params : undefined,
                params: method === 'GET' ? params : undefined,
                // headers: {
                //     'Content-Type': 'application/json',
                //     'Accept': 'application/json',
                //     'Authorization': token ? `Bearer ${token}` : '',
                // },
            };

            const response = await axios(config);

            return response.data;
        } catch (err) {
            handleError(err);
        }
    }
}
