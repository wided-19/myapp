import React from 'react';
import './App.css';
import {Button, Form, Row, Col,  } from 'react-bootstrap';


function App() {
  return (

    <div className="App">

      <h1>Welcome</h1>

      <header className="App-header"> 
      
      <Form>
        <table class="elements"  > 
      <Row>
      
          <Col md>
            <tr>
            <Form.Label>First name</Form.Label>
            </tr>
            <td>
            <Form.Control placeholder="First name" />
            </td>
            
          </Col>
          <Col md>
            <tr>
            <Form.Label>Last name</Form.Label>
            </tr>
            <td>
            <Form.Control placeholder="Last name" />
            </td>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <tr>
    <Form.Label>Address </Form.Label>
    </tr>
    <td>
    <Form.Control placeholder="Apartment, studio, or floor" />
    </td>
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicCountry">
    <tr>
    <Form.Label>Country</Form.Label>
    </tr>
    <td>
    <Form.Control type="Country" placeholder="Country" />
    </td>

  </Form.Group>

  <div class="style-select">
          <select data-id="domain-switcher">
            <option>Choose City</option>
            <option value="http://www.doctoralia.com.tu">tunis</option>

            <option value="http://www.doctoraliar.so">Sousse</option>
            <option value="http://www.doctoraliar.sf">Sfax</option>
            <option value="http://www.doctoraliar.na">Nabeul</option>
            </select>
            </div>
                             



  <Form.Group className="mb-3" controlId="formBasicEmail">
    <tr>
    <Form.Label>Email address</Form.Label>
    </tr>
    <td>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted"> 

    </Form.Text>
    </td>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <tr>
    <Form.Label>Password</Form.Label>
    </tr>
    <td>
    <Form.Control type="password" placeholder="Password" />
    </td>
  </Form.Group>


  
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
   
  </Form.Group>
  <tr>
    <td>
  
   
  <Button variant="primary" type="submit">
    Submit

  </Button></td></tr>
  </table>
  

</Form>
      </header>
    </div>
  );
}


export default App;