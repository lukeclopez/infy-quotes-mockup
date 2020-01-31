import React, {useState, useEffect} from "react";
import {Form} from "react-bootstrap";

const CustomerDetails = () => {
    return (
        <div className="container">
            <h2 align="left">Auto Quote Registration</h2>
    <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="text" placeholder="Ex: 10030" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>DL ID</Form.Label>
            <Form.Control type="text" placeholder="DL ID" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Age when you got first license</Form.Label>
            <Form.Control type="number" placeholder="Age" />
        </Form.Group>
    </Form>
        </div>
    )
};

export default CustomerDetails
