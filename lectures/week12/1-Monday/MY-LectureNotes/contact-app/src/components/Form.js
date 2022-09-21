import React, {useState, useEffect} from "react";
import {Form, Button, Col, Row} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const ContactForm = (props) => {

  const [name, setName] = useState(()=>props.isEdit ? props.contact.name : '');
  const [number, setNumber] = useState(()=>props.isEdit ? props.contact.number : '');
  const [email, setEmail] = useState(()=>props.isEdit ? props.contact.email : '');
  const [address, setAddress] = useState(()=>props.isEdit ? props.contact.address : '');
  const [city, setCity] = useState(()=>props.isEdit ? props.contact.city : '');
  const [state, setState] = useState(()=>props.isEdit ? props.contact.state : '');
  const [zip, setZip] = useState(()=>props.isEdit ? props.contact.zip : '');
  const [isFavorite, setIsFavorite] = useState(()=>props.isFavorite ? props.contact.isFavorite : false);
  
  console.log(isFavorite);

  const handleAddContact = (e) => {
    e.preventDefault();

    let contactID = props.isEdit ?  props.contact.id : uuidv4();

    let newContact = {
          id: contactID,
          name: name,
          number: number,
          email: email,
          address: address,
          city: city,
          state: state,
          zip: zip,
          isFavorite: isFavorite
        }

        props.isEdit ? props.onEdit(newContact) : props.onAdd(newContact);

        console.log('in forms adding a new contact');
        props.onEditMode(false);
  }

  return (
    <>
      <Form onSubmit={handleAddContact}>

      <Form.Group controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control value={name} placeholder="Enter Name" required onChange={(e)=>setName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control value={address} placeholder="1234 Main St" required onChange={(e)=>setAddress(e.target.value)} />
        </Form.Group>

        <Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control value={city} required onChange={(e)=>setCity(e.target.value)} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select"  defaultValue={state} 
              onChange={(e)=>setState(e.target.value)} >
              <option value="">Choose...</option>
              <option value="California">California</option>
              <option value="Georgia">Georgia</option>
              <option value="Texas">Texas</option>
              <option value="Washington">Washington</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control value={zip} required onChange={(e)=>setZip(e.target.value)} />
          </Form.Group>
        </Row>

        <Row>

        <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control value={number} type="phone" placeholder="Enter phone number" required
            onChange={(e)=>setNumber(e.target.value)} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder="Enter email" />
          </Form.Group>
          
        </Row>
        <Form.Group>
        <Form.Check
        onChange={(e)=>{setIsFavorite(e.target.checked)}}
          value={isFavorite}
          label="Favorite this contact"
          
        />
      </Form.Group>

      <Row className="float-right">

        <Form.Group id="formGridCheckbox" >
        <Button variant="info"  type="submit" className="mr-2">
          Submit
        </Button>
        </Form.Group>

        <Form.Group id="formGridCheckbox" >
        <Button variant="danger"  type="button" onClick={()=>{
            props.onCancel();
            props.onJustCancelled(true);
            return;
          }}>
          Cancel
        </Button>
        </Form.Group>

        </Row>
      </Form>
    </>
  );
};

export default ContactForm;