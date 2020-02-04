import React, {useState} from "react";
import {Modal} from "react-bootstrap";


function EditModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        props.handleEditBtn(props.id)
        setShow(true);
    };

    return (
        <>
            <span className="btn-primary btn btn-group-lg" onClick={handleShow}>
                 Edit
            </span>

            <Modal show={show} onHide={handleClose}>
                {props.children}
            </Modal>
        </>
    );
}

export default EditModal
