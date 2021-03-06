import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {calendarStartDeleteEvent} from '../../actions/calendar';

function DeleteEvent() {

    const dispatch = useDispatch();
    const {selectedEvent} = useSelector(select => select.calendar);

    const handleDeleteEvent = () => {
        dispatch(calendarStartDeleteEvent(selectedEvent._id));
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
