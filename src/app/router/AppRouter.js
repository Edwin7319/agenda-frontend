import React, {useEffect} from 'react';
import {
    BrowserRouter as Router, Redirect,
    Switch,
} from 'react-router-dom';
import LoginScreen from '../components/auth/login/LoginScreen';
import CalendarScreen from '../components/calendar/route/CalendarScreen';
import RegisterScreen from '../components/auth/register/RegisterScreen';
import {useDispatch, useSelector} from 'react-redux';
import {renewToken} from '../actions/auth';
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";

function AppRouter() {

    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth);

    useEffect(
        () => {
            dispatch(renewToken());
        }, [dispatch]
    );


    return (
        <Router>
            <Switch>
                <PublicRouter
                    path="/login"
                    component={LoginScreen}
                    isAuth={!!user}
                />
                <PublicRouter
                    path="/register"
                    component={RegisterScreen}
                    isAuth={!!user}
                />
                <PrivateRouter
                    path="/app"
                    component={CalendarScreen}
                    isAuth={!!user}
                />
                <Redirect to="/app"/>
            </Switch>
        </Router>
    );
}

export default AppRouter;