import React from 'react';
import {Card} from 'primereact/card';
import {Link} from "react-router-dom";

function RegisterScreen() {

    const handleOnSubmit = (event) => {
        event.preventDefault();
    }

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
                                    />
                                </div>

                                <div className="col-sm-12 mt-3">
                                    <label
                                        className="title-label"
                                        htmlFor="correo"
                                    >
                                        Correo:*
                                    </label>
                                    <input
                                        className="form-control"
                                        type="mail"
                                        id="correo"
                                        autoComplete="off"
                                        placeholder="EJ: edwin.guamushig@calendar.com"
                                        name="correo"
                                    />
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
                                    />
                                </div>

                                <div className="col-sm-12 mt-4">
                                    <button
                                        className="btn btn-block btn-sm btn-info"
                                        type="submit"
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