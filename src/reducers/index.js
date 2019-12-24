import { combineReducers } from 'redux';
import allLession from './lessonReducer';
import allWord from './wordReducer';
import examSettings from './examSettings';

const mainReducer = combineReducers({
    allLession,
    allWord,
    examSettings
});

export default mainReducer;