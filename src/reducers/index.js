import { combineReducers } from 'redux';
import allLession from './lessonReducer';
import allWord from './wordReducer';
import examSettings from './examSettings';
import examStatus from './examStatus';
import examCheck from './examCheck';

const mainReducer = combineReducers({
    allLession,
    allWord,
    examSettings,
    examStatus,
    examCheck
});

export default mainReducer;