import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {startLogout} from '../../actions/auth';
import {calendarLogout} from '../../actions/calendar';

function Navbar() {

    const {user} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(startLogout());
        dispatch(calendarLogout());
    }

    return (
        <div className="navbar navbar-dark bg-dark mb-4">
            <span className="navbar-brand">
                BIENVENIDO <b>{`${user.name}`.toUpperCase()}</b>  😘 👋
            </span>

            <button
                className="btn btn-danger btn-sm"
            onClick={handleLogOut}
            >
                <i className="fas fa-sign-out-alt"/>
                <span> SALIR</span>
            </button>
        </div>
    );
}

export default Navbar;