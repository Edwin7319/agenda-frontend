import {combineReducers} from 'redux';
import uiReducer from './uiReducer';
import calendarReducer from './calendarReducer';

export const principalReducer = combineReducers({
    ui: uiReducer,
    calendar: calendarReducer,
});