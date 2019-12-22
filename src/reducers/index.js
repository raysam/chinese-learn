import { combineReducers } from 'redux';
import setDefaultLession from './defaultLesson';
import allLession from './lessonSettings';

const mainReducer = combineReducers({
    setDefaultLession,
    allLession
});

export default mainReducer;