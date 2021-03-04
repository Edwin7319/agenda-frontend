import {TYPES} from "../types/types";

const initialState = {
    authenticated: false,
}

function authReducer(state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case TYPES.authLogin:
            return {
                ...state,
                authenticated: true,
                user: {
                    ...payload,
                }
            }
        default:
            return state;
    }
}

export default authReducer;