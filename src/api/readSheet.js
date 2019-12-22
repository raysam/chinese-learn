import callApi from './sheet';
import config from "../constansts/config";


export const getAllLessons = async () => {
    let resp = await callApi(config.TABLE_LESSONS);
    let restructure = resp.map((row, index) => {
        return {
            id: row[0],
            name: row[1],
            slug: row[2],
            create_date: row[3]
        }
    })
    restructure.shift();
    return restructure;
}

export const getUpdateDate = async () => {
    let resp = await callApi(config.TABLE_UPDATE_DATE);
    return resp[0][0];
}

export const getAllWords = async () => {
    let resp = await callApi(config.TABLE_WORDS);
    let restructure = resp.map((row, index) => {
        return {
            id: row[0],
            parent_id: row[1],
            word: row[2],
            mword: row[3],
            pinyin: row[4],
            mean: row[5],
            create_date: row[6],
        }
    });
    restructure.shift();
    return restructure;
}