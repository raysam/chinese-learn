export const getAllLessons = resp => {
    let restructure = resp.data.valueRanges[0].values.map((row, index) => {
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

export const getAllWords = resp => {
    let restructure = resp.data.valueRanges[0].values.map((row, index) => {
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

export const getUpdateDate = resp => {
    let rs = resp.data.valueRanges[0].values;
    return rs[0][0];
}

