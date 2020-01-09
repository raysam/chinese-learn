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

export const setSetting = settings => {
    return {
        type: types.SETUP_SETTINGS,
        settings
    }
}

export const setExamStatus = () => {
    return {
        type: types.EXAM_STATUS
    }
}

export const setExamStatusFalse = () => {
    return {
        type: types.EXAM_STATUS_FALSE
    }
}

export const setExamChecked = () => {
    return {
        type: types.EXAM_CHECKED
    }
}

export const setExamUncheck = () => {
    return {
        type: types.EXAM_UNCHECK
    }
}

export const setExamScores = wordSet => {
    return {
        type: types.EXAM_SCORES,
        wordSet
    }
}