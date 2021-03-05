import {loginService, registerUserService, renewTokenService} from '../services/auth-service';
import {TYPES} from '../types/types';
import {toast} from 'react-toastify';
import {TOASTER_CONFIG} from '../constant/toaster-config';

function startLogin(credentials) {
    return async (dispatch) => {
        try {
            const {data} = await loginService(credentials);
            const {ok} = data;
            if (ok) {
                const {token} = data;
                localStorage.setItem('token', token);
                localStorage.setItem('token-init-date', `${new Date().getTime()}`);
                const {user: {_id: uid, name}} = data;
                dispatch(login({
                    uid,
                    name,
                }));
            } else {
                dispatch(authUserTimeOut());
            }
        } catch (e) {
            dispatch(authUserTimeOut());
            toast.error('Credenciales ingresadas no validas', {
                ...TOASTER_CONFIG,
                autoClose: 5000,
            });
            console.error({
                mensaje: 'Error al logear usuario',
                error: e,
                data: credentials,
            });
        }

    }
}

function startRegisterUser(user) {
    return async (dispatch) => {
        try {
            const {data} = await registerUserService(user);
            const {ok} = data;
            if (ok) {
                const {token} = data;
                localStorage.setItem('token', token);
                localStorage.setItem('token-init-date', `${new Date().getTime()}`);
                const {userSaved: {_id: uid, name}} = data;
                dispatch(login({
                    uid,
                    name,
                }));
            } else {
                toast.warning('El correo que ha ingresado ya se encuentra registrado', {
                    ...TOASTER_CONFIG,
                    autoClose: 5000,
                });
            }
        } catch (e) {
            toast.error('Error al registrar usuario, revise la información', {
                ...TOASTER_CONFIG,
                autoClose: 5000,
            });
            console.error({
                mensaje: 'Error al registrar usuario',
                error: e,
                data: user,
            });
        }
    }
}

function renewToken() {
    return async (dispatch) => {
        try {
            const {data} = await renewTokenService();
            const {ok} = data;
            if (ok) {
                const {token} = data;
                localStorage.setItem('token', token);
                localStorage.setItem('token-init-date', `${new Date().getTime()}`);
                const {user: {_id: uid, name}} = data;
                dispatch(login({
                    uid,
                    name,
                }));
            } else {
                dispatch(authUserTimeOut());
            }
        } catch (e) {
            console.error({
                mensaje: 'Error al autenticar usuario',
                error: e,
            });
        }
    }
}

function startLogout() {
    return (dispatch) => {
        localStorage.clear();
        dispatch(logout());
    }
}

function logout() {
    return {
        type: TYPES.authLogout,
    }
}

function authUserTimeOut() {
    return {
        type: TYPES.authAuthenticatedFinish,
    }
}


function login(user) {
    return {
        type: TYPES.authLogin,
        payload: user,
    }
}

export {
    startLogin,
    startRegisterUser,
    renewToken,
    startLogout,
}