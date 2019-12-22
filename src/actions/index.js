import * as types from './../constansts/ActiveTypes';


export const setAllLesson = lessons => {
    return {
        type: types.SHOW_ALL_LESSON,
        lessons
    }
}

export const setAllWord = words => {
    return {
        type: types.SHOW_ALL_WORD,
        words
    }
}