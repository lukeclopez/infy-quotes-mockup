import React, { useState, useEffect } from "react";
import {Table, Button} from "react-bootstrap";

const RecentTransactions = () => {

    const [data, setData] = useState([]);


    return (
        <Table striped bordered hover style={{marginTop: "20px"}}>
            <thead>
            <tr>
                <th>Zip code</th>
                <th>Age of License</th>
                <th>Email</th>
                <th>Model</th>
                <th>Manufacturer</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>

            </tbody>
        </Table>
    )
};

export default RecentTransactions
