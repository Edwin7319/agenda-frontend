import React, {useState} from 'react';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';

import Navbar from '../../ui/Navbar';
import CalendarEvent from '../CalendarEvent';
import CalendarModal from '../modal/CalendarModal';
import * as moment from 'moment';
import {CALENDAR_MESSAGES} from '../../../constant/calendar-message';
import {Calendar, momentLocalizer} from 'react-big-calendar';


moment.locale('es');
const localizer = momentLocalizer(moment);

const eventList = [
    {
        title: 'Fecha actual',
        start: moment().toDate(),
        end: moment()
            .add(2, 'hours')
            .toDate(),
        user: {
            uid: '1',
            name: 'Edwin'
        }
    }
];

function CalenderScreen() {

    const [lastView, setLastView] = useState(localStorage.getItem('pestania-activa') || 'month');

    const eventGetStyle = (event, startDate, endDate, isSelected) => {
    }

    const onDoubleClick = (event) => {
        console.log(event);
    }

    const onSelectEvent = (event) => {
        console.log(event);
    }

    const onViewChange = (event) => {
        setLastView(event);
        localStorage.setItem('pestania-activa', event);
    }

    return (
        <div className="calendar-screen">
            <Navbar/>

            <Calendar
                localizer={localizer}
                events={eventList}
                startAccessor="start"
                endAccessor="end"
                style={{height: 500}}
                messages={CALENDAR_MESSAGES}
                eventPropGetter={eventGetStyle}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
                view={lastView}
                components={{
                    event: CalendarEvent
                }}
            />

            <CalendarModal/>
        </div>
    );
}

export default CalenderScreen;