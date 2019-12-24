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
            return state.lessonIdList = action.lessonIdList;
        case types.STEP2_DONE:
            return state.settings.numberWords = action.settings.numberWords;
        default:
            return state;
    }
};

export default setSettings;