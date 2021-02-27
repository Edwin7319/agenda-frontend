import {combineReducers} from 'redux';
import uiReducer from './uiReducer';

export const principalReducer = combineReducers({
    ui: uiReducer,

});