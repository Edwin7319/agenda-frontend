import {TYPES} from '../types/types';
import * as moment from "moment";

const initialState = {
    events: [
        {
            id: Math.random(),
            title: 'Fecha actual',
            startDate: moment().toDate(),
            endDate: moment()
                .add(2, 'hours')
                .toDate(),
            notes: 'Recordatorio cumpleaños',
            user: {
                uid: '1',
                name: 'Edwin'
            }
        }
    ],
    selectedEvent: null,
}

function calendarReducer(state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
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
                        (event) => event.id === payload.id ?
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
                        (event) => event.id !== payload
                    )
            }
        default:
            return state;
    }
}

export default calendarReducer;
