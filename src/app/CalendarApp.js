import React from 'react';
import AppRouter from './router/AppRouter';
import {ToastContainer} from 'react-toastify';

function CalendarApp() {
    return (
     <>
         <AppRouter/>
         <ToastContainer
             hideProgressBar={false}
             newestOnTop={false}
             closeOnClick
             rtl
             pauseOnFocusLoss
             draggable
             pauseOnHover
         />
         </>
    );
}

export default CalendarApp;