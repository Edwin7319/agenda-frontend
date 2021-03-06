import {TYPES} from '../types/types';
import {toast} from "react-toastify";
import {TOASTER_CONFIG} from "../constant/toaster-config";
import {
    createEventService,
    deleteEventService,
    getAllEventService,
    updateEventService
} from "../services/event-service";
import {validateEventsToLoad} from "../helpers/validate-events-to-load";
import * as moment from "moment";

function calendatStartAddNewEvent(event) {
    return async (disapatch, getState) => {
        try {
            const {data} = await createEventService(event);
            const {ok} = data;
            if (ok) {
                const {user} = getState().auth;
                const {eventSaved} = data;
                const newEven = {
                    ...eventSaved,
                    user,
                }
                disapatch(calendarAddNewEvent(newEven));
            } else {

            }


        } catch (e) {
            toast.error('Error al registrar crear evento', {
                ...TOASTER_CONFIG,
                autoClose: 5000,
            });
            console.error({
                mensaje: 'Error al registrar evento',
                error: e,
                data: event,
            });
        }
    }
}

function calendarStartLoadingEvents() {
    return async (dispatch) => {
        try {
            const {data} = await getAllEventService();
            const {ok} = data;
            if (ok) {
                const {events} = data;
                const eventsMapped = validateEventsToLoad(events);
                dispatch(calendarLoadingEvents(eventsMapped));
            }
        } catch (e) {
            toast.error('Error al buscar todos los eventos', {
                ...TOASTER_CONFIG,
                autoClose: 5000,
            });
            console.error({
                mensaje: 'Error al buscar todos los eventos',
                error: e,
            });
        }
    }
}

function calendarStartUpdateEvent(id, event) {
    return async (dispatch) => {
        try {
            const {data} = await updateEventService(id, event);
            const {ok} = data;
            if (ok) {
                const {eventUpdated} = data;
                const event = {
                    ...eventUpdated,
                    startDate: moment(eventUpdated.startDate).toDate(),
                    endDate: moment(eventUpdated.endDate).toDate(),
                    user: {
                        uid: eventUpdated.user._id,
                        name: eventUpdated.user.name,
                    }
                }
                dispatch(calendarUpdateEvent(id, event));
                toast.success('Evento editado de manera correcta', TOASTER_CONFIG);
            }

        } catch (e) {
            toast.error('Error al actualizar el evento', {
                ...TOASTER_CONFIG,
                autoClose: 5000,
            });
            console.error({
                mensaje: 'Error al actualizar el evento',
                error: e,
                data: event,
            });
        }
    }
}

function calendarStartDeleteEvent(id) {
    return async (dispatch) => {
        try {

            const {data} = await deleteEventService(id);
            const {ok} = data;
            if (ok) {
                dispatch(calendarDeleteEvent(id));
                toast.success('Evento eliminado de manera correcta', TOASTER_CONFIG);
            }

        } catch (e) {
            toast.error('Error al eliminar el evento', {
                ...TOASTER_CONFIG,
                autoClose: 5000,
            });
            console.error({
                mensaje: 'Error al eliminar el evento',
                error: e,
                data: id,
            });
        }
    }
}

function calendarLoadingEvents(events) {
    return {
        type: TYPES.calendarLoadEvents,
        payload: events,
    }
}

function calendarSetSelectedEvent(event) {
    return {
        type: TYPES.calendarSetSelectedEvent,
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


function calendarAddNewEvent(event) {
    return {
        type: TYPES.calendarAddNewEvent,
        payload: {
            ...event
        }
    }
}

function calendarLogout() {
    return {
        type: TYPES.calendarLogout,
    }
}


export {
    calendarSetSelectedEvent,
    calendatStartAddNewEvent,
    calendarClearSelectedEvent,
    calendarStartLoadingEvents,
    calendarStartUpdateEvent,
    calendarLogout,
    calendarStartDeleteEvent,
}