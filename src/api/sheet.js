import config from "../constansts/config";
import axios from 'axios';

export default async function callApi(table, method = "get", data = null) {
    let rs = await axios({
        method: method,
        url: config.fullUrl+table,
        data
    }).catch(err => {
        console.log(err);
    });
    if (rs.status === 200) {
        return rs.data.valueRanges[0].values;
    }
}
