import * as types from './../constansts/ActiveTypes';

var defaultState = [];

var setLession = (state = defaultState, action) => {
    if (action.type === types.SHOW_ALL_LESSON) {
        state = action.lessons
    }
    return state;
};

export default setLession;