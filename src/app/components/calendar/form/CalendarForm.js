import React, {useCallback, useEffect, useState} from 'react';
import * as moment from 'moment';
import TextField from '@material-ui/core/TextField';
import useForm from '../../../hooks/useForm';
import {toast} from 'react-toastify';
import {TOASTER_CONFIG} from '../../../constant/toaster-config';
import {useDispatch, useSelector} from 'react-redux';
import {
    calendarClearSelectedEvent, calendarStartUpdateEvent,
    calendatStartAddNewEvent
} from '../../../actions/calendar';
import {uiCloseModal} from '../../../actions/ui';

const initalDate = moment()
    .add(0, 'hours')
    .format('yyyy-MM-DDTHH:mm');

const finishDate = moment()
    .add(1, 'days')
    .format('yyyy-MM-DDTHH:mm');


function CalendarForm() {

    const dispatch = useDispatch();
    const {selectedEvent} = useSelector(select => select.calendar);

    const [formValues, formInputChange, resetForm, setFormValues] = useForm({
        title: '',
        notes: '',
        startDate: initalDate,
        endDate: finishDate,
    });

    const [isFormValied, setFormValid] = useState(false)

    const {
        title,
        notes,
        startDate,
        endDate,
    } = formValues;

    const validateForm = useCallback(() => {
        return title.trim().length < 2;
    }, [title])

    useEffect(
        () => {
            setFormValid(validateForm());
        }, [setFormValid, validateForm]
    );

    useEffect(
        () => {
            if (selectedEvent) {
                const startDate = moment(selectedEvent.startDate)
                    .format('yyyy-MM-DDTHH:mm');
                const endDate = moment(selectedEvent.endDate)
                    .format('yyyy-MM-DDTHH:mm');
                const actualEvent = {
                    ...selectedEvent,
                    startDate,
                    endDate,
                }
                setFormValues(actualEvent);
            }
        }, [selectedEvent, setFormValues]
    )

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const date1 = moment(startDate)
            .format('MM/DD/YYYY');
        const date2 = moment(endDate)
            .format('MM/DD/YYYY');

        const isValidDate = moment(date1, 'MM/DD/YYYY')
            .isSameOrBefore(date2);

        if (!isValidDate) {
            return toast.error('Fecha no válida. La fecha de inicio debe ser menor a la final.', {
                ...TOASTER_CONFIG,
            });
        }

        const newEvent = {
            ...formValues,
            startDate: moment(startDate).format('YYYY-MM-DD'),
            endDate: moment(endDate).format('YYYY-MM-DD'),
        }

        formValues.notes === '' && delete newEvent.notes;

        if (selectedEvent) {
            dispatch(calendarStartUpdateEvent(selectedEvent._id, newEvent));
        } else {
            dispatch(calendatStartAddNewEvent(newEvent));
        }

        dispatch(calendarClearSelectedEvent());
        dispatch(uiCloseModal());
        resetForm();
    }

    return (
        <div className="mt-0 mb-4">
            <h3 className="text-center">
                {
                    selectedEvent ? 'EDITAR' : 'AGREGAR'
                } EVENTO
            </h3>
            <hr/>
            <form onSubmit={handleOnSubmit}>
                <div className="row">

                    <div className="col-sm-12">
                        <label htmlFor="startDate">Fecha y hora inicio</label>
                        <TextField
                            id="startDate"
                            name="startDate"
                            className="form-control"
                            type="datetime-local"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={formInputChange}
                            value={startDate}
                        />
                    </div>

                    <div className="col-sm-12 mt-4">
                        <label htmlFor="endDate">Fecha y hora fin</label>
                        <TextField
                            id="endDate"
                            name="endDate"
                            className="form-control"
                            type="datetime-local"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={formInputChange}
                            value={endDate}
                        />
                    </div>

                    <div className="col-sm-12 mt-3">
                        <hr/>
                        <label>
                            Titulo y notas
                        </label>
                        <small id="emailHelp"
                               className="form-text text-muted"
                        >
                            Una descripción corta
                        </small>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Título del evento"
                            name="title"
                            autoComplete="off"
                            onChange={formInputChange}
                            value={title}
                        />
                    </div>

                    <div className="col-sm-12 mt-4">
                        <small
                            id="descriptionHelp"
                            className="form-text text-muted"
                        >
                            Información adicional de la nota
                        </small>
                        <textarea
                            id="description"
                            type="text"
                            className="form-control"
                            placeholder="Notas adicionales"
                            rows="5"
                            name="notes"
                            onChange={formInputChange}
                            value={notes}
                        />
                    </div>

                    <div className="col-sm-12 mt-3">
                        <button
                            type="submit"
                            className="btn btn-outline-primary btn-block"
                            disabled={isFormValied}
                        >
                            <i className="far fa-save"/>
                            <span>
                                {
                                    selectedEvent ? ' EDITAR' : ' GUARDAR'
                                }
                            </span>
                        </button>
                    </div>
                </div>

            </form>
        </div>
    );
}

export default CalendarForm;