import { combineReducers } from 'redux';
import allLession from './lessonReducer';
import allWord from './wordReducer';

const mainReducer = combineReducers({
    allLession,
    allWord
});

export default mainReducer;