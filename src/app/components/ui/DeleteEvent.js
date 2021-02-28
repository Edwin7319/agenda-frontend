import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {calendarDeleteEvent} from '../../actions/calendar';
import {toast} from 'react-toastify';
import {TOASTER_CONFIG} from '../../constant/toaster-config';

function DeleteEvent() {

    const dispatch = useDispatch();
    const {selectedEvent} = useSelector(select => select.calendar);

    const handleDeleteEvent = () => {
        dispatch(calendarDeleteEvent(selectedEvent.id));
        toast.success('Evento eliminado de manera correcta', TOASTER_CONFIG);
    }

    return (
        <button
            className="btn btn-sm btn-danger btn-delete"
            onClick={handleDeleteEvent}
        >
            <i className="fas fa-trash"/> ELIMINAR
        </button>
    );
}


export default DeleteEvent;
