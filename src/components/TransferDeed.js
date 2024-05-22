import React, { useState } from 'react';

const TransferDeed = ({ web3, landRegistryContract, accounts }) => {
  const [deedId, setDeedId] = useState('');
  const [recipient, setRecipient] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await landRegistryContract.methods.transferDeed(deedId, recipient).send({ from: accounts[0] });
      console.log('Deed transferred successfully');
    } catch (error) {
      console.error('Error transferring deed:', error);
    }
  };

  return (
    <div>
      <h2>Transfer Deed</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Deed ID:
          <input type="text" value={deedId} onChange={(e) => setDeedId(e.target.value)} />
        </label>
        <label>
          Recipient Address:
          <input type="text" value={recipient} onChange={(e) => setRecipient(e.target.value)} />
        </label>
        <button type="submit">Transfer</button>
      </form>
    </div>
  );
};

export default TransferDeed;
