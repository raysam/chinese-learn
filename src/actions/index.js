import * as types from './../constansts/ActiveTypes';

export const setDefaultLesson = (lessonDefault) => {
    return {
        type: types.DEFAULT_LESSON,
        lessonDefault
    }
};

export const setAllLesson = lessons => {
    return {
        type: types.SHOW_ALL_LESSON,
        lessons
    }
}