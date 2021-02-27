import {TYPES} from '../types/types';

function uiOpenModal() {
    return {
        type: TYPES.uiOpenModal
    }
}

function uiCloseModal() {
    return {
        type: TYPES.uiCloseModal
    }
}

export {
    uiOpenModal,
    uiCloseModal,
}