import React, {useState} from "react";
import {Modal} from "react-bootstrap";
import {FaPencilAlt} from "react-icons/all";

function EditModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        props.handleEditBtn(props.id)
        setShow(true);
    };

    return (
        <>
            <span style={{cursor: "pointer", textAlign: "left", color: "#005b96"}} onClick={handleShow}>
                <FaPencilAlt/> Edit
            </span>

            <Modal show={show} onHide={handleClose}>
                {props.children}
            </Modal>
        </>
    );
}

export default EditModal
