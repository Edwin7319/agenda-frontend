import React from 'react';
import ReactDOM from 'react-dom';
import CalendarApp from './app/CalendarApp';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'react-toastify/dist/ReactToastify.css';
import './style.scss';

import {ToastContainer} from 'react-toastify';

ReactDOM.render(
    <React.StrictMode>
        <CalendarApp/>
        <ToastContainer/>
    </React.StrictMode>,
    document.getElementById('root')
);

