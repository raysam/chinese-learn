import { combineReducers } from 'redux';
import allLession from './lessonReducer';
import allWord from './wordReducer';
import examSettings from './examSettings';
import examStatus from './examStatus';

const mainReducer = combineReducers({
    allLession,
    allWord,
    examSettings,
    examStatus
});

export default mainReducer;