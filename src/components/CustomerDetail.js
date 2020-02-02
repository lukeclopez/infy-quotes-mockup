import React, {useState, useEffect} from "react";
import {Form} from "react-bootstrap";

const CustomerDetails = () => {
    const [zip, setZip] = useState("");
    const [dlId, setdlId] = useState("");
    const [age, setage] = useState("");

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
            <Form.Control value={dlId} onChange={e => setdlId(e.target.value)} type="text" placeholder="DL ID" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Age when you got first license</Form.Label>
            <p>{age}</p>
            <Form.Control value={age} onChange={e => setage(e.target.value)} type="number" placeholder="Age" />
        </Form.Group>
    </Form>
        </div>
    )
};

export default CustomerDetails
