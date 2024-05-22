import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function CityCouncil({ web3, landRegistryContract, accounts }) {
  const [landId, setLandId] = useState('');

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      await landRegistryContract.methods.verifyLand(landId).send({ from: accounts[0] });
      alert('Land verified successfully');
    } catch (error) {
      console.error('Error verifying land:', error);
      alert(`Error verifying land: ${error.message}`);
    }
  };

  return (
    <Form onSubmit={handleVerify}>
      <h2>City Council: Verify Land</h2>
      <Form.Group controlId="formLandId">
        <Form.Label>Land ID</Form.Label>
        <Form.Control
          type="text"
          value={landId}
          onChange={(e) => setLandId(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">Verify Land</Button>
    </Form>
  );
}

export default CityCouncil;
