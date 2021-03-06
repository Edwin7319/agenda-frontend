import * as moment from 'moment';

function validateEventsToLoad(events = []) {
    return events.map(
        (event) => ({
            ...event,
            startDate: moment(event.startDate).toDate(),
            endDate: moment(event.endDate).toDate(),
            user: {
                uid: event.user._id,
                name: event.user.name,
            }
        })
    )
}

export {
    validateEventsToLoad,
}