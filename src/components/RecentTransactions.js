import React from "react";
import {Table, Button} from "react-bootstrap";

const RecentTransactions = () => {
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
            <tr>
                <td>10030</td>
                <td>23</td>
                <td>test@test.com</td>
                <td>Accord</td>
                <td>Honda</td>
                <td>
                    <Button>Select</Button><Button>Delete</Button>
                </td>
            </tr>
            <tr>
                <td>10030</td>
                <td>23</td>
                <td>test@test.com</td>
                <td>Accord</td>
                <td>Honda</td>
                <td>
                    <Button>Select</Button><Button>Delete</Button>
                </td>
            </tr>
            </tbody>
        </Table>
    )
};

export default RecentTransactions
