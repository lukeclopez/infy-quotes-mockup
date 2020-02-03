import React from "react";
import {Form} from "react-bootstrap";

const CustomerDetails = ({zip, setZip, dlId, setDlId, age, setAge }) => {
    return (
        <div className="container">
            <h2 align="left">Auto Quote Registration</h2>
    <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Zip Code</Form.Label>
            <p>{zip}</p>
            <Form.Control value={zip} onChange={e => setZip(e.target.value)} type="text" placeholder="Ex: 10030" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>DL ID</Form.Label>
            <p>{dlId}</p>
            <Form.Control value={dlId} onChange={e => setDlId(e.target.value)} type="text" placeholder="DL ID" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Age when you got first license</Form.Label>
            <p>{age}</p>
            <Form.Control value={age} onChange={e => setAge(e.target.value)} type="number" placeholder="Age" />
        </Form.Group>
    </Form>
        </div>
    )
};

export default CustomerDetails
