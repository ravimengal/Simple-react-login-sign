import React from 'react'
import { Form, Button, Col, Card } from "react-bootstrap";

const Signup = () => {
  return (
    <div>
      <h1>welcome to signup page</h1>

      <>
        <Card>

          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>



            <div className="btn-sn">
              <Button className="btn-sign" variant="primary" type="submit" onClick={() => alert('hello')}>Submit</Button>
            </div>
          </Form>
        </Card>
      </>
    </div>
  )
}
export default Signup