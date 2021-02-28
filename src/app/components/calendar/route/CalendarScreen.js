import React, {useState} from 'react';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';

import Navbar from '../../ui/Navbar';
import CalendarEvent from '../CalendarEvent';
import CalendarModal from '../modal/CalendarModal';
import * as moment from 'moment';
import {CALENDAR_MESSAGES} from '../../../constant/calendar-message';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import {useDispatch, useSelector} from 'react-redux';
import {uiOpenModal} from '../../../actions/ui';
import {calendarClearSelectedEvent, calendarSetSelectedEvent} from '../../../actions/calendar';
import AddNewEvent from '../../ui/AddNewEvent';
import DeleteEvent from '../../ui/DeleteEvent';


moment.locale('es');
const localizer = momentLocalizer(moment);


function CalenderScreen() {

    const [lastView, setLastView] = useState(localStorage.getItem('pestania-activa') || 'month');
    const dispatch = useDispatch();
    const {events, selectedEvent} = useSelector(select => select.calendar);

    const eventGetStyle = (event, startDate, endDate, isSelected) => {
    }

    const onDoubleClick = (event) => {
        dispatch(uiOpenModal());
    }

    const onSimpleClick = (event) => {
        dispatch(calendarSetSelectedEvent(event));
    }

    const onViewChange = (event) => {
        setLastView(event);
        localStorage.setItem('pestania-activa', event);
    }

    const onSelectSlot = (event) => {
        dispatch(calendarClearSelectedEvent());
    }

    return (
        <div className="calendar-screen">
            <Navbar/>

            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="startDate"
                endAccessor="endDate"
                style={{height: 500}}
                messages={CALENDAR_MESSAGES}
                eventPropGetter={eventGetStyle}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSimpleClick}
                onView={onViewChange}
                onSelectSlot={onSelectSlot}
                selectable={true}
                view={lastView}
                components={{
                    event: CalendarEvent
                }}
            />

            <AddNewEvent/>
            {
                selectedEvent && <DeleteEvent/>
            }
            <CalendarModal/>
        </div>
    );
}

export default CalenderScreen;