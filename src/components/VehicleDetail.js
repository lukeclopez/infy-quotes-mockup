import React from "react";
import {Form} from "react-bootstrap";

const VehicleDetails = () => {
    return (
        <div className="container">
            <h3 align="left">Vehicle Info</h3>
            <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Vehicle Model</Form.Label>
                    <Form.Control as="select">
                        <option>Accord</option>
                        <option>Corolla</option>
                        <option>MORE OPTIONS</option>
                        <option>MORE OPTIONS</option>
                        <option>MORE OPTIONS</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Manufacturer</Form.Label>
                    <Form.Control as="select">
                        <option>Honda</option>
                        <option>Toyota</option>
                        <option>MORE OPTIONS</option>
                        <option>MORE OPTIONS</option>
                        <option>MORE OPTIONS</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Year</Form.Label>
                    <Form.Control type="number" min="1900" max="2099" step="1" placeholder="2020" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Policy effective date</Form.Label>
                    <Form.Control type="date"  />
                </Form.Group>
            </Form>
        </div>
    )
};

export default VehicleDetails
