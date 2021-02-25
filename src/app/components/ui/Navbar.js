import React from 'react';

function Navbar() {
    return (
        <div className="navbar navbar-dark bg-dark mb-4">
            <span className="navbar-brand">
                Vanessa
            </span>

            <button className="btn btn-danger btn-sm">
                <i className="fas fa-sign-out-alt"/>
                <span> SALIR</span>
            </button>
        </div>
    );
}

export default Navbar;