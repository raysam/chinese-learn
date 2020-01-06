import * as types from '../constansts/ActiveTypes';


var defaultState = {
    allSetting: false,
    lessonIdList: [],
    wordFilter: [],
    settings: {
        numberWords: 0,
        examTime: "0",
        examOnline: false
    }
};

var setSettings = (state = defaultState, action) => {
    if (action.type === types.SETUP_SETTINGS) {
        state = action.settings;
    }
    return state;
};

export default setSettings;