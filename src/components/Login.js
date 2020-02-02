import React, { useState, useEffect } from "react";
import {Form, Button, Jumbotron} from "react-bootstrap";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return(
      <React.Fragment>
          <div className="container" style={{marginTop: "50px"}}>
              <Jumbotron>
          <Form style={{alignContent: "center"}}>
              <Form.Group controlId="formBasicEmail">
                  <Form.Label align="left">Email address</Form.Label>
                  <Form.Control value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" style={{width:"50%"}}  />
                  <p>{email}</p>
                  <Form.Text className="text-muted">
                      We'll never share your info with anyone else.
                  </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <p>{password}</p>
                  <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" style={{width:"50%"}}/>
              </Form.Group>
              <Button variant="primary" type="submit" style={{alignContent: "center"}}>
                  Submit
              </Button>
          </Form>
              </Jumbotron>
          </div>
      </React.Fragment>
  )
};

export default Login
