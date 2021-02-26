import React from 'react';

function CalendarEvent({event}) {

    const {title, user} = event;

    return (
        <>
            <b>{title} -</b>
            <span> {user?.name}</span>
        </>
    );
}

export default CalendarEvent;