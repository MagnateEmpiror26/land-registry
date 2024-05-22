import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function GrantDeed({ web3, landRegistryContract, accounts }) {
  const [landId, setLandId] = useState('');
  const [newOwner, setNewOwner] = useState('');

  const handleGrant = async (e) => {
    e.preventDefault();
    try {
      await landRegistryContract.methods.grantDeed(landId, newOwner).send({ from: accounts[0] });
      alert('Deed granted successfully');
    } catch (error) {
      console.error('Error granting deed:', error);
      alert(`Error granting deed: ${error.message}`);
    }
  };

  return (
    <Form onSubmit={handleGrant}>
      <h2>Grant Deed</h2>
      <Form.Group controlId="formLandId">
        <Form.Label>Land ID</Form.Label>
        <Form.Control
          type="text"
          value={landId}
          onChange={(e) => setLandId(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formNewOwner">
        <Form.Label>New Owner Address</Form.Label>
        <Form.Control
          type="text"
          value={newOwner}
          onChange={(e) => setNewOwner(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">Grant Deed</Button>
    </Form>
  );
}

export default GrantDeed;
