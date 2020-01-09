import * as types from '../constansts/ActiveTypes';


var defaultState = {
    examCheck: false,
    examCorrentCount: 0
};

var setCheck = (state = defaultState, action) => {
    switch(action.type) {
        case types.EXAM_CHECKED:
            state.examCheck = true
            return state
        case types.EXAM_UNCHECK:
            state.examCheck = false
            return state
        case types.EXAM_SCORES:
            state.examCorrentCount = state.examCorrentCount + 1
            return state
        default:
            return state
    }
};

export default setCheck;