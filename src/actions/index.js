import * as types from './../constansts/ActiveTypes';

export const setDefaultLesson = (lessonDefault) => {
    return {
        type: types.DEFAULT_LESSON,
        lessonDefault
    }
};