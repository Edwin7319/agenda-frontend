import {enviroment} from '../../environments/environment.dev';
import axios from 'axios';

const baseUrl = enviroment.backend.url;

function loginService(credentials) {

    const url = `${baseUrl}/auth/login`;

    // return fetch(url, {
    //     method: 'POST',
    //     headers: {
    //         'Content-type': 'application/json',
    //     },
    //     body: JSON.stringify(credentials),
    // })
    return axios({
        method: 'post',
        url,
        data: {
            ...credentials
        }
    });
}

function registerUserService(user) {
    const url = `${baseUrl}/auth/register`;
    return axios({
        method: 'post',
        url,
        data: {
            ...user,
        }
    });
}

function renewTokenService() {
    const token = localStorage.getItem('token') || '';
    const url = `${baseUrl}/auth/renew-token`;
    return axios({
        method: 'get',
        url,
        headers: {
            'x-token': token,
        },
    });
}

export {
    loginService,
    registerUserService,
    renewTokenService
}