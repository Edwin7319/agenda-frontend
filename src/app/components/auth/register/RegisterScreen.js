import React, {useCallback, useEffect, useState} from 'react';
import {Card} from 'primereact/card';
import {Link} from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import validator from 'validator';
import {toast} from 'react-toastify';
import {TOASTER_CONFIG} from '../../../constant/toaster-config';
import {useDispatch} from 'react-redux';
import {startRegisterUser} from '../../../actions/auth';

const initalStateErrosForm = {
    password: '',
    name: '',
    email: '',
}

function RegisterScreen() {

    const dispatch = useDispatch();

    const [formValues, formInputChange,] = useForm({
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
    });

    const [formValid, setFormValid] = useState(false);

    const [errorsForm, setErrorForm] = useState(initalStateErrosForm);

    const {
        name,
        email,
        password,
        passwordConfirm,
    } = formValues;

    const handleOnSubmit = (event) => {
        event.preventDefault();

        if (passwordConfirm !== password) {
            return toast.error('Contraseñas ingresadas no coinciden', TOASTER_CONFIG);
        }

        dispatch(startRegisterUser(formValues));

    }

    const validateForm = useCallback(
        () => {
            setErrorForm(initalStateErrosForm);

            if (name.trim().length < 3 && name.trim().length > 0) {
                setErrorForm(err => ({
                    ...err,
                    name: 'El campo nombre debe tener al menos 3 caracteres',
                }));
                return false;
            }

            if (!validator.isEmail(email) && email.trim().length > 0) {
                setErrorForm(err => ({
                    ...err,
                    email: 'El email ingresado no es valido',
                }));
                return false;
            }

            return true
        }, [name, email]
    )

    useEffect(
        () => {
            const isValid = validateForm();
            setFormValid(isValid);
        }, [name, email, setFormValid, validateForm]
    )


    return (
        <div className="container">
            <div className="row h-100">
                <div className="col-md-5 mx-auto separacion-card">
                    <Card>
                        <h4 className="text-center mb-4">
                            REGISTRO
                        </h4>
                        <hr/>
                        <form onSubmit={handleOnSubmit}>
                            <div className="row">

                                <div className="col-sm-12 mt-3">
                                    <label
                                        className="title-label"
                                        htmlFor="name"
                                    >
                                        Nombres:*
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="name"
                                        autoComplete="off"
                                        placeholder="EJ: Edwin Guamushig"
                                        name="name"
                                        value={name}
                                        onChange={formInputChange}
                                    />
                                    {
                                        errorsForm.name !== '' && (
                                            <small className="text-danger"
                                            >
                                                {errorsForm.name}
                                            </small>
                                        )
                                    }
                                </div>

                                <div className="col-sm-12 mt-3">
                                    <label
                                        className="title-label"
                                        htmlFor="email"
                                    >
                                        Correo:*
                                    </label>
                                    <input
                                        className="form-control"
                                        type="email"
                                        id="email"
                                        autoComplete="off"
                                        placeholder="EJ: edwin.guamushig@calendar.com"
                                        name="email"
                                        value={email}
                                        onChange={formInputChange}
                                    />
                                    {
                                        errorsForm.email !== '' && (
                                            <small className="text-danger"
                                            >
                                                {errorsForm.email}
                                            </small>
                                        )
                                    }
                                </div>

                                <div className="col-sm-12 mt-3">
                                    <label
                                        className="title-label"
                                        htmlFor="password"
                                    >
                                        Password:*
                                    </label>
                                    <input
                                        className="form-control"
                                        type="password"
                                        id="password"
                                        autoComplete="off"
                                        placeholder="***************"
                                        name="password"
                                        value={password}
                                        onChange={formInputChange}
                                    />
                                </div>

                                <div className="col-sm-12 mt-3">
                                    <label
                                        className="title-label"
                                        htmlFor="passwordConfirm"
                                    >
                                        Confirmar password:*
                                    </label>
                                    <input
                                        className="form-control"
                                        type="password"
                                        id="passwordConfirm"
                                        autoComplete="off"
                                        placeholder="***************"
                                        name="passwordConfirm"
                                        value={passwordConfirm}
                                        onChange={formInputChange}
                                    />
                                </div>

                                <div className="col-sm-12 mt-4">
                                    <button
                                        className="btn btn-block btn-sm btn-info"
                                        type="submit"
                                        disabled={!formValid}
                                    >
                                        REGISTRAR
                                    </button>

                                    <button
                                        className="btn btn-sm btn-link mt-3 btn-block">
                                        <Link to="/login">
                                            Ya me encuentro registrado
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );

}

export default RegisterScreen;