import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function RegisterLand({ web3, landRegistryContract, accounts }) {
  const [location, setLocation] = useState('');
  const [area, setArea] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await landRegistryContract.methods.registerLand(location, area).send({ from: accounts[0] });
      alert('Land registered successfully');
    } catch (error) {
      console.error('Error registering land:', error);
      alert(`Error registering land: ${error.message}`);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Register Land</h2>
      <Form.Group controlId="formLocation">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formArea">
        <Form.Label>Area(Enter Digit for Deedid)</Form.Label>
        <Form.Control
          type="text"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">Register Land</Button>
    </Form>
  );
}

export default RegisterLand;
