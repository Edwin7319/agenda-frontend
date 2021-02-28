import React from 'react';
import {useDispatch} from 'react-redux';
import {uiOpenModal} from '../../actions/ui';
import {calendarClearSelectedEvent} from '../../actions/calendar';

function AddNewEvent() {

    const dispatch = useDispatch();

    const handleOpenModal = () => {
        dispatch(calendarClearSelectedEvent());
        dispatch(uiOpenModal());
    }

    return (
        <button
        className="btn btn-primary btn-add"
        onClick={handleOpenModal}
        >
            <i className="fas fa-plus"/>
        </button>
    );
}

export default AddNewEvent;
