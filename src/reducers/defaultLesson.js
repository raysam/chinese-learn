import * as types from './../constansts/ActiveTypes';


var defaultState = '';

var setDefaultLession = (state = defaultState, action) => {
    if (action.type === types.DEFAULT_LESSON) {
        return action.lessonDefault;
    }
    return state;
};

export default setDefaultLession;