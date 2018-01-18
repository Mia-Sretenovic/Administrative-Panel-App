import { BASE_URL } from "../constants";
import axios from "axios";

class CommunicationService {

    get(path, successHandler, errorHandler) {
        axios({
            method: "GET",
            url: `${BASE_URL}${path}`,
        })
        .then((data) => { successHandler(data); })

        .catch(error => {
             errorHandler(error) || console.log(error);
            });
    }


    post(path, data, successHandler, errorHandler) {

        axios({
            method: "POST",
            url: `${BASE_URL}${path}`,
            data: data,
            json: true
        })

        .then(response => {
            return successHandler(response);
            })

        .catch(error => {
             errorHandler(error);
            });
    }


    delete(path, successHandler, errorHandler) {

        axios({
            method: "DELETE",
            url: `${BASE_URL}${path}`,
        })

        .then(response => {
            return successHandler(response);
            })

        .catch(error => {
            errorHandler(error) || console.log(error);
            });
    }
}


export const communicationService = new CommunicationService();
