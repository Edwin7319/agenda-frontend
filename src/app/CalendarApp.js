import React from 'react';
import AppRouter from './router/AppRouter';
import {ToastContainer} from 'react-toastify';
import {Provider} from 'react-redux';
import {store} from './store/store';

function CalendarApp() {
    return (
     <Provider store={store}>
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
         </Provider>
    );
}

export default CalendarApp;