import React, { useState, useEffect } from "react";
import API from "../utils/API";
import {Table, Modal, Jumbotron} from "react-bootstrap";
import EditModal from "./editModal";


const AllTransactions = () => {

    const [data, setData] = useState([]);
    const [zipCode, setZipCode] = useState("");
    const [ageOfLic, setAgeOfLic] = useState("");
    const [emailM, setEmailM] = useState("");
    const [modelM, setModelM] = useState("");
    const [manufacturerM, setManufacturerM] = useState("");



    const loadTransactions = () => {
        API.getTransactions()
            .then(res => setData(res.data)
            )
            .catch(err => console.log(err));
    };

    useEffect(loadTransactions, [])

    const deleteTransaction = id => {
        API.deleteTransaction(id)
            .then(res => loadTransactions())
            .catch(err => console.log(err));
    };

    const updateTransaction = id => {
        if (zipCode && ageOfLic && emailM && modelM && manufacturerM){
            API.updateTransaction(id, {
               zip: zipCode,
               age: ageOfLic,
               email: emailM,
               model: modelM,
               manufacturer: manufacturerM
            }).then(res => loadTransactions())
                .catch(err => console.log(err))
        }
    };

    const handleEditBtn = id => {
        API.getTransactionsById(id)
            .then(res => {
                const { age, email, manufacturer, model, zip } = res.data
                setZipCode(zip);
                setAgeOfLic(age);
                setEmailM(email);
                setModelM(model);
                setManufacturerM(manufacturer);
            })
    };

    const renderTable = () => {
        if(data.length){
            return data.map((i, index ) => {
                const { age, email, id, manufacturer, model, zip } = i;
                return(
                    <tr key={id}>
                        <td>{zip}</td>
                        <td>{age}</td>
                        <td>{email}</td>
                        <td>{model}</td>
                        <td>{manufacturer}</td>
                        <td>
                            <EditModal handleEditBtn={handleEditBtn} id={id} >
                                <Modal.Header closeButton>
                                    <Modal.Title>Edit Transaction</Modal.Title>
                                </Modal.Header>
                                <Modal.Body align="center">
                                    <h5>Zip Code</h5>
                                    <input type="text"
                                           placeholder=""
                                           value={zipCode}
                                           onChange={e => setZipCode(e.target.value)}
                                    />
                                    <h5>Age</h5>
                                    <input type="text"
                                           placeholder=""
                                           value={ageOfLic}
                                           onChange={e => setAgeOfLic(e.target.value)}
                                    />
                                    <h5>Email</h5>
                                    <input type="email"
                                           placeholder=""
                                           value={emailM}
                                           onChange={e => setEmailM(e.target.value)}
                                    />
                                    <h5>Model</h5>
                                    <input type="text"
                                           placeholder=""
                                           value={modelM}
                                           onChange={e => setModelM(e.target.value)}
                                    />
                                    <h5>Manufacturer</h5>
                                    <input type="text"
                                           placeholder=""
                                           value={manufacturerM}
                                           onChange={e => setManufacturerM(e.target.value)}
                                    />
                                </Modal.Body>
                                <Modal.Footer>
                                    <button className="btn btn-light btn-lg" onClick={()=> updateTransaction(id)} > Update</button>
                                </Modal.Footer>
                            </EditModal>
                            <div style={{width: "12px", height: "auto", display: "inline-block"}}/>
                            <span className="btn-group-lg btn btn-danger" onClick={()=> deleteTransaction(i.id)}>
                                 Delete
                            </span>
                        </td>
                    </tr>
                )
            })
        }
    };

    return (
        <div className='container'>
            <Jumbotron>
        <Table striped bordered hover style={{marginTop: "30px", borderRadius:"10px"}}>
            <thead>
            <tr>
                <th>Zip code</th>
                <th>Age of License</th>
                <th>Email</th>
                <th>Model</th>
                <th>Manufacturer</th>
            </tr>
            </thead>
            <tbody>
            {renderTable()}
            </tbody>
        </Table>
            </Jumbotron>
        </div>
    )
};

export default AllTransactions
