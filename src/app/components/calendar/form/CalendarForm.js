import React, {useCallback, useEffect, useState} from 'react';
import * as moment from 'moment';
import TextField from '@material-ui/core/TextField';
import useForm from '../../../hooks/useForm';
import {toast} from 'react-toastify';
import {TOASTER_CONFIG} from '../../../constant/toaster-config';

const initalDate = moment()
    .add(0, 'hours')
    .format('yyyy-MM-DDTHH:mm');

const finishDate = moment()
    .add(1, 'days')
    .format('yyyy-MM-DDTHH:mm');


function CalendarForm() {

    const [formValues, formInputChange] = useForm({
        title: '',
        note: '',
        startDate: initalDate,
        endDate: finishDate,
    });

    const [setFormValid] = useState(false)

    const {
        title,
        note,
        startDate,
        endDate,
    } = formValues;

    const validateForm = useCallback(() => {
        return title.trim().length > 2;
    }, [title])

    useEffect(
        () => {
            setFormValid(validateForm());
        }, [title, startDate, endDate, setFormValid, validateForm]
    );

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const date1 = moment(startDate)
            .format('yyyy-MM-DD HH:mm');
        const date2 = moment(endDate)
            .format('yyyy-MM-DD HH:mm');

        const isValidDate = moment(date1)
            .isSameOrBefore(date2);

        if (!isValidDate) {
            toast.error('Fecha no válida. La fecha de inicio debe ser menor a la final.', {
                ...TOASTER_CONFIG,
            });
            return;
        }

    }

    return (
        <>
            <h3 className="text-center">
                AGREGAR EVENTO
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
                            name="note"
                            onChange={formInputChange}
                            value={note}
                        />
                    </div>
                </div>

            </form>
        </>
    );
}

export default CalendarForm;