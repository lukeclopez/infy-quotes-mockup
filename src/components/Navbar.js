import React from "react";
import { Navbar } from "react-bootstrap"
import {Link} from "react-router-dom";

const Nav = () => {
return (
<React.Fragment>
<Navbar style={{backgroundColor: " #3b5998"}}>
    <Navbar.Brand href="/" style={{color: "#f7f7f7"}}>QUOTES</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
        <Navbar.Text style={{color: "#f7f7f7"}}>
             <Link to="/quote">Client quote</Link>
        </Navbar.Text>
    </Navbar.Collapse>
</Navbar>
</React.Fragment>
)
    };

export default Nav;
