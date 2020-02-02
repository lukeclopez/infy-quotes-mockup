import React, { useState, useEffect } from "react";
import {Form} from "react-bootstrap";

const VehicleDetails = () => {
    const [model, setModel] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [year, setYear] = useState("");
    const [pdate, setPdate] = useState("");
    return (
        <div className="container">
            <h3 align="left">Vehicle Info</h3>
            <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Vehicle Model</Form.Label>
                    <p>{model}</p>
                    <Form.Control as="select" value={model} onChange={e => setModel(e.target.value)}>
                        <option>Accord</option>
                        <option>Corolla</option>
                        <option>MORE OPTIONS</option>
                        <option>MORE OPTIONS</option>
                        <option>MORE OPTIONS</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Manufacturer</Form.Label>
                    <p>{manufacturer}</p>
                    <Form.Control as="select" value={manufacturer} onChange={e => setManufacturer(e.target.value)}>
                        <option>Honda</option>
                        <option>Toyota</option>
                        <option>MORE OPTIONS</option>
                        <option>MORE OPTIONS</option>
                        <option>MORE OPTIONS</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Year</Form.Label>
                    <p>{year}</p>
                    <Form.Control type="number" min="1900" max="2099" step="1" placeholder="2020" value={year} onChange={e => setYear(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Policy effective date</Form.Label>
                    <p>{pdate}</p>
                    <Form.Control type="date" value={pdate} onChange={e => setPdate(e.target.value)}  />
                </Form.Group>
            </Form>
        </div>
    )
};

export default VehicleDetails
