import React from 'react';
import * as PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';

function PublicRouter(
    {
        isAuth,
        component: Component,
        ...rest
    }
) {
    return (
        <Route
            {...rest}
            component={
                (props) => !isAuth ?
                    <Component {...props}/>
                    :
                    <Redirect to="/app"/>
            }
        />
    );
}

PublicRouter.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
}

export default PublicRouter;