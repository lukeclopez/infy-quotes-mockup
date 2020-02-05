import React, {useEffect, useState} from "react";
import API from "../utils/API";
import { Navbar } from "react-bootstrap"
import {Link} from "react-router-dom";

const Nav = () => {
    const [policies, setPolicies] = useState("");
    const loadTransactions = () => {
        API.getTransactions()
            .then(res => setPolicies(res.data)
            )
            .catch(err => console.log(err));
    };

    useEffect(loadTransactions, [])

    return (
<React.Fragment>
<Navbar style={{backgroundColor: " #3b5998"}}>
    <Navbar.Brand href="/" style={{color: "#f7f7f7"}}>QUOTES</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
        <Navbar.Text >
             <Link style={{color: "#f7f7f7"}} to="/new-quote">Post a quote, {"Admin"}</Link>
        </Navbar.Text>
        <div style={{width: "42px", height: "auto", display: "inline-block"}}/>

        <Navbar.Text >
            <Link style={{color: "#f7f7f7"}} to="/transactions">Policies :: {policies.length}</Link>
        </Navbar.Text>
    </Navbar.Collapse>
</Navbar>
</React.Fragment>
)
    };

export default Nav;
