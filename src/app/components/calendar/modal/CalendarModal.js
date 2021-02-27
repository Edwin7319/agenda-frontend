import React from 'react';
import Modal from 'react-modal';
import {CUSTOM_MODAL_STYLE} from '../../../constant/custom-modal-style';
import CalendarForm from '../form/CalendarForm';
import {useDispatch, useSelector} from 'react-redux';
import {uiCloseModal} from '../../../actions/ui';

Modal.setAppElement('#root');

function CalendarModal() {

    const {modalOpen} = useSelector(select => select.ui);
    const dispatch = useDispatch();


    const closeModal = () => {
        dispatch(uiCloseModal());
    }

    return (
        <div className="row">
            <div className="col-md-6">
                <Modal
                    isOpen={modalOpen}
                    // onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={CUSTOM_MODAL_STYLE}
                    closeTimeoutMS={250}
                    className="modal"
                    overlayClassName="modal-fondo"
                >
                    <CalendarForm/>

                </Modal>
            </div>
        </div>
    );
}

export default CalendarModal;