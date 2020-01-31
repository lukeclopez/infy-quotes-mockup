import React from "react";
import CustomerDetail from "./CustomerDetail"
import VehicleDetails from "./VehicleDetail";
import RecentTransactions from "./RecentTransactions";
import {Button} from "react-bootstrap";

const AutoQuote = () => {
return (
    <div className="container" style={{marginTop: "60px"}}>
        <CustomerDetail/>
        <VehicleDetails/><br/>
        <Button className="btn" align="center">Submit</Button>
        <RecentTransactions/>
    </div>
)
};

export default AutoQuote
