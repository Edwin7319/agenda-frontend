import {loginService} from "../services/auth-service";
import {TYPES} from "../types/types";

function startLogin(credentials) {
    return async (dispatch) => {
        try {
            const responseLogin = await loginService(credentials);
            const data = await responseLogin.json();
            const {ok, token} = data;
            if (ok) {
                localStorage.setItem('token', token);
                localStorage.setItem('token-init-date', `${new Date().getTime()}`);
                const {user: {_id: uid, name}} = data;
                dispatch(login({
                    uid,
                    name,
                }));
            }
        } catch (e) {
            console.error({
                mensaje: 'Error al logear usuario',
                error: e,
                data: credentials,
            });
        }

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
}