import React, {useState} from 'react';
import Modal from 'react-modal';
import {CUSTOM_MODAL_STYLE} from '../../../constant/custom-modal-style';
import CalendarForm from "../form/CalendarForm";

Modal.setAppElement('#root');

function CalendarModal() {

    const [isModalOpen, setModalOpen] = useState(true);

    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <div className="row">
            <div className="col-md-6">
                <Modal
                    isOpen={isModalOpen}
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