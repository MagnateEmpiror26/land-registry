import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

function FetchLandInfo({ web3, landRegistryContract }) {
  const [landId, setLandId] = useState('');
  const [landInfo, setLandInfo] = useState(null);

  const handleFetch = async (e) => {
    e.preventDefault();
    try {
      const info = await landRegistryContract.methods.getLandInfo(landId).call();
      setLandInfo(info);
    } catch (error) {
      console.error('Error fetching land info:', error);
      alert(`Error fetching land info: ${error.message}`);
    }
  };

  return (
    <div>
      <Form onSubmit={handleFetch}>
        <h2>Fetch Land Info</h2>
        <Form.Group controlId="formLandId">
          <Form.Label>Land ID</Form.Label>
          <Form.Control
            type="text"
            value={landId}
            onChange={(e) => setLandId(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">Fetch Info</Button>
      </Form>
      {landInfo && (
        <Card className="mt-4">
          <Card.Body>
            <Card.Title>Land Information</Card.Title>
            <Card.Text>
              <strong>ID:</strong> {landInfo[0]} <br />
              <strong>Location:</strong> {landInfo[1]} <br />
              <strong>Area:</strong> {landInfo[2]} <br />
              <strong>Owner:</strong> {landInfo[3]} <br />
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default FetchLandInfo;
