import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import LoginScreen from '../components/auth/login/LoginScreen';
import CalendarScreen from '../components/calendar/route/CalendarScreen';
import RegisterScreen from '../components/auth/register/RegisterScreen';

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path="/login"
                    component={LoginScreen}
                />
                <Route
                    exact
                    path="/register"
                    component={RegisterScreen}
                />
                <Route
                    exact
                    path="/app"
                    component={CalendarScreen}
                />
                <Redirect
                    to="/login"
                />
            </Switch>
        </Router>
    );
}

export default AppRouter;