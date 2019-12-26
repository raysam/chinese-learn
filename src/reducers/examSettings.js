import * as types from '../constansts/ActiveTypes';


var defaultState = {
    lessonIdList: [],
    settings: {
        numberWords: 0,
        examOnline: false
    }
};

var setSettings = (state = defaultState, action) => {
    switch(action.type) {
        case types.STEP1_DONE:
            state.lessonIdList = action.lessonIdList;
            return state;
        case types.STEP2_DONE:
            state.settings.numberWords = action.settings.numberWords;
            return state;
        default:
            return state;
    }
};

export default setSettings;