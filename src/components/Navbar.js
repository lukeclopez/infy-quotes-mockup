import React from "react";
import { Navbar } from "react-bootstrap"

const Nav = () => {
return (
<React.Fragment>
<Navbar style={{backgroundColor: " #3b5998"}}>
    <Navbar.Brand href="/" style={{color: "#f7f7f7"}}>QUOTES</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
        <Navbar.Text style={{color: "#f7f7f7"}}>
             <a href="/quote">Client quote</a>
        </Navbar.Text>
    </Navbar.Collapse>
</Navbar>
</React.Fragment>
)
    };

export default Nav;
