import {enviroment} from '../../environments/environment.dev';

const baseUrl = enviroment.backend.url;

function loginService(credentials) {

    const url = `${baseUrl}/auth/login`;

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(credentials),
    })
}

export {
    loginService,
}