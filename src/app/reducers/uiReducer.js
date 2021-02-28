import {TYPES} from '../types/types';

const initialState = {
    modalOpen: false,
}

function uiReducer(state = initialState, action) {

    const {type} = action;

    switch (type) {
        case TYPES.uiOpenModal:
            return {
                ...state,
                modalOpen: true,
            }
        case TYPES.uiCloseModal:
            return {
                ...state,
                modalOpen: false,
            }
        default:
            return state;
    }
}


export default uiReducer;
