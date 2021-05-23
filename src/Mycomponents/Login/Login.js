import React from 'react'
import {Link} from 'react-router-dom'
import { Form, Button , Card} from "react-bootstrap";
import './Login.css'

const Login = () => {
  return (
    <div className="Header-line">
      <h1>welcome to login page</h1>

      <>

<Card className="card">

  <Card.Body>
      
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          </Form>
          

          <div className="btn-ls">
          <Button className="btn-log"  type="submit">Login</Button>
          <Link to="./signup" style={{textDecoration:'none' , textDecorationColor:'white'}}>
          <Button className="btn-sign" variant="primary">Signup</Button></Link>
          </div>
          
        
          </Card.Body>
          </Card>
          
         

      </>

    </div>
  )
}

export default Login