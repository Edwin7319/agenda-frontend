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
                user: {
                    ...payload,
                },
                authenticated: true,
            }
        case TYPES.authAuthenticatedFinish:
            return {
                ...state,
                authenticated: true,
            }
        case TYPES.authLogout:
            return {
                authenticated: false,
            }
        default:
            return state;
    }
}

export default authReducer;