import {TYPES} from '../types/types';

function calendarSetSelectedEvent(event) {
    return {
        type: TYPES.calendarSetSelectedEvent,
        payload: {
            ...event
        }
    }
}

function calendarAddNewEvent(event) {
    return {
        type: TYPES.calendarAddNewEvent,
        payload: {
            ...event
        }
    }
}

function calendarClearSelectedEvent() {
    return {
        type: TYPES.calendarClearSelectedEvent,
        payload: null,
    }
}

function calendarUpdateEvent(id, event) {
    return {
        type: TYPES.calendarUpdateEvent,
        payload: {
            id,
            event: {
                ...event
            },
        }
    }
}

function calendarDeleteEvent(id) {
    return {
        type: TYPES.calendarDeleteEvent,
        payload: id,
    }
}

export {
    calendarSetSelectedEvent,
    calendarAddNewEvent,
    calendarClearSelectedEvent,
    calendarUpdateEvent,
    calendarDeleteEvent,
}