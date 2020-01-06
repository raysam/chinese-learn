import * as types from '../constansts/ActiveTypes';


var defaultState = false;

var setStatus = (state = defaultState, action) => {
    if (action.type === types.EXAM_STATUS) {
        state = !state;
    }
    if (action.type === types.EXAM_STATUS_FALSE) {
        state = false;
    }
    return state;
};

export default setStatus;