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

/**
 * 
 * @param {array} data API data
 * @param {boolean} type true for DESC, false for ASC, default is true
 * @param {int} top number of top item like TOP 5, TOP 10. default is 10
 */
export const getTopWord = (data, top = 10) => {
    let rs = [];
    rs = data.sort((a,b)=> (a.create_date > b.create_date) ? -1 : ((a.create_date < b.create_date) ? 1 : 0));
    rs = rs.slice(0, top);
    return rs;
}

export const getDateByMili = (mili, type = "sec") => {
    switch(type) {
        case "day":
            return (mili / (1000*60*60*24));
        case "hour":
            return ((mili / (1000*60*60)) % 24);
        case "min":
            return ((mili / (1000*60)) % 60);
        default:
            return (mili / 1000) % 60 ;
    }
}

export const getLessonBySlug = (lessons, slug) => {
    return lessons.find(lesson => lesson.slug === slug);
}

export const getWordsByParentId = (words, parent_id) => {
    return words.filter(word => (word.parent_id === parent_id));
}