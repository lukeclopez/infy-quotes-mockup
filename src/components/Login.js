import React from "react";
import {Form, Button, Jumbotron} from "react-bootstrap";

const Login = () => {
  return(
      <React.Fragment>
          <div className="container" style={{marginTop: "50px"}}>
              <Jumbotron>
          <Form style={{alignContent: "center"}}>
              <Form.Group controlId="formBasicEmail">
                  <Form.Label align="left">Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" style={{width:"50%"}}  />
                  <Form.Text className="text-muted">
                      We'll never share your info with anyone else.
                  </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" style={{width:"50%"}}/>
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
