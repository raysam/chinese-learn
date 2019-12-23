import * as types from '../constansts/ActiveTypes';


var defaultState = [];

var setAllWord = (state = defaultState, action) => {
    if (action.type === types.SHOW_ALL_WORD) {
        state = action.words
    }
    return state;
};

export default setAllWord;