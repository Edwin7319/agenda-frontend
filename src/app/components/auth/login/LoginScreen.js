import React from 'react';

import './login-style.scss';
import {Card} from 'primereact/card';
import {Link} from "react-router-dom";


function LoginScreen() {

    const handleOnSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="container">
            <div className="row h-100">
                <div className="col-md-5 mx-auto separacion-card">
                    <Card>
                        <h4 className="text-center mb-4">
                            INGRESAR
                        </h4>
                        <hr/>
                        <form onSubmit={handleOnSubmit}>
                            <div className="row">

                                <div className="col-sm-12 mt-3">
                                    <label
                                        className="title-label"
                                        htmlFor="username"
                                    >
                                        Usuario o correo:
                                    </label>
                                    <input
                                        type="text"
                                        id="username"
                                        autoComplete="off"
                                        placeholder="EJ: edwin@gmail.com"
                                        name="username"
                                        className="form-control"
                                    />
                                </div>

                                <div className="col-sm-12 mt-3">
                                    <label
                                        className="title-label"
                                        htmlFor="password"
                                    >
                                        Password:
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        autoComplete="off"
                                        placeholder="**********"
                                        name="password"
                                        className="form-control"
                                    />
                                </div>

                                <div className="col-sm-12 mt-4">
                                    <button
                                        className="btn btn-block btn-sm btn-warning"
                                        type="submit"
                                    >
                                        <b>INGRESAR</b>
                                    </button>
                                </div>
                            </div>
                        </form>

                        <div className="row">
                            <div className="col-sm-12">
                                <hr/>
                                Ingresar con:
                                <div className="google-btn mt-3">
                                    <div className="google-icon-wrapper">
                                        <img className="google-icon"
                                             src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                             alt="imagen_google"
                                        />
                                    </div>
                                    <p className="btn-text"><b>CUENTA GOOGLE</b></p>
                                </div>
                            </div>
                            <div className="col-sm-12 mt-3">
                                <button
                                className="btn btn-sm btn-block btn-link"
                                >
                                    <Link to="/register">
                                        ¿Registrarse?
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default LoginScreen;