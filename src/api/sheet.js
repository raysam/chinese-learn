import config from "../constansts/config";
import axios from 'axios';

export default function callApi(table, method = "get", data = null) {
    return axios({
        method: method,
        url: config.fullUrl+table,
        data
    }).catch(err => {
        console.log(err);
    });
}
