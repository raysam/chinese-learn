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

export const setSettingStep1 = lessonIdList => {
    return {
        type: types.STEP1_DONE,
        lessonIdList
    }
}

export const setSettingStep2 = settings => {
    return {
        type: types.STEP2_DONE,
        settings
    }
}