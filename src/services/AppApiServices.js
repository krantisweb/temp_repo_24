import { Endpoints } from "./ApiEndPoints";
import { ApiClient } from "./ApiClient";

export class AppApiService {
    apiClient = new ApiClient();

    static handleApiResponse(response, handleError) {
        if (response.data && response.data.success) {
        } else {
            if (handleError) {
                handleError(response.data);
            }
        }
        return response.data;
    }
//first api call for get user details
    apiCallForUserDetails = async (handleError, params) => {
        const queryParams = new URLSearchParams();
        for (const [key, value] of Object.entries(params)) {
            queryParams.append(key, value.toString());
        }
        const response = await this.apiClient.makeApiCall("get", `${Endpoints.getUserDetails}?${queryParams.toString()}`, handleError);
        console.log(response,"response");
        return response;
    };

    // you can call second api here
    // login api call
    // getLoginApiCall = async (email, password) => {
    //     try {
    //         const response = await axios.post(Endpoints.getSignIn, {email, password});
        
    //         return response.data;
    //     } catch (error) {
    //         throw error;
    //     }
    // };

}
