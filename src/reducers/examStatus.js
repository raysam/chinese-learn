import * as types from '../constansts/ActiveTypes';


var defaultState = false;

var setStatus = (state = defaultState, action) => {
    if (action.type === types.EXAM_STATUS) {
        state = !state;
    }
    return state;
};

export default setStatus;