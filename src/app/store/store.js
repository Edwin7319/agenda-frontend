import {applyMiddleware, compose, createStore} from 'redux';
import {principalReducer} from '../reducers/principalReducer';
import thunk from 'redux-thunk';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose();

export const store = createStore(
    principalReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);