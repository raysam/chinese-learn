import * as types from '../constansts/ActiveTypes';

var defaultState = false

var setCheck = (state = defaultState, action) => {
    switch(action.type) {
        case types.EXAM_CHECKED:
            state = true
            break
        case types.EXAM_UNCHECK:
            state = false
            break
        default:
            break
    }
    return state;
};

export default setCheck;