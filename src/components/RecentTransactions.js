import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Table } from "react-bootstrap";

const RecentTransactions = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
            API.getTransactions()
                .then(res => setData(res.data))
                .catch(err => console.log(err));
        }
        , []
    );

    const renderTable = () => {
      if(data.length){
          return data.map((i, index ) => {
              const { age, email, id, manufacturer, model, zip } = i
              return(
                  <tr key={id}>
                      <td>{zip}</td>
                      <td>{age}</td>
                      <td>{email}</td>
                      <td>{model}</td>
                      <td>{manufacturer}</td>
                  </tr>
              )
          })
      }
    };

    return (
        <Table striped bordered hover style={{marginTop: "20px"}}>
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
    )
};

export default RecentTransactions
