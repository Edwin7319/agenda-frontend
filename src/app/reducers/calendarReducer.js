import {TYPES} from '../types/types';

const initialState = {
    events: [],
    selectedEvent: null,
}

function calendarReducer(state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case TYPES.calendarLoadEvents:
            return {
                ...state,
                events: [...payload],
            }
        case TYPES.calendarSetSelectedEvent:
            return {
                ...state,
                selectedEvent: payload,
            }
        case TYPES.calendarAddNewEvent:
            return {
                ...state,
                events: [...state.events, payload]
            }
        case TYPES.calendarClearSelectedEvent:
            return {
                ...state,
                selectedEvent: payload,
            }
        case TYPES.calendarUpdateEvent:
            return {
                ...state,
                events: state
                    .events
                    .map(
                        (event) => event._id === payload.id ?
                            payload.event :
                            event
                    )
            }
        case TYPES.calendarDeleteEvent:
            return {
                ...state,
                selectedEvent: null,
                events: state
                    .events
                    .filter(
                        (event) => event._id !== payload
                    )
            }
        case TYPES.calendarLogout: {
            return {
                ...initialState,
            }
        }
        default:
            return state;
    }
}

export default calendarReducer;
