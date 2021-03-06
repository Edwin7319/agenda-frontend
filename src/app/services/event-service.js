import {enviroment} from '../../environments/environment.prod';
import axios from 'axios';

const baseUrl = enviroment.backend.url + '/event';

function createEventService(event) {

    const token = localStorage.getItem('token');

    return axios({
        method: 'post',
        url: baseUrl,
        headers: {
            'x-token': token,
        },
        data: {
            ...event,
        }
    });
}

function getAllEventService() {
    const token = localStorage.getItem('token');
    return axios({
        method: 'get',
        url: baseUrl,
        headers: {
            'x-token': token,
        },
    });
}

function updateEventService(id, event) {
    const token = localStorage.getItem('token');
    return axios({
        method: 'put',
        url: `${baseUrl}/${id}`,
        headers: {
            'x-token': token,
        },
        data: {
            event,
        }
    });
}

function deleteEventService(id) {
    const token = localStorage.getItem('token');
    return axios({
        method: 'delete',
        url: `${baseUrl}/${id}`,
        headers: {
            'x-token': token,
        },
    });
}

export {
    createEventService,
    getAllEventService,
    updateEventService,
    deleteEventService,
}