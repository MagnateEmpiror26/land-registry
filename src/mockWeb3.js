// src/mockWeb3.js
import Web3 from 'web3';

const getMockWeb3 = async () => {
  const mockProvider = {
    send: (payload, callback) => {
      // Mock the response for eth_accounts
      if (payload.method === 'eth_accounts') {
        callback(null, { jsonrpc: '2.0', result: ['0x1234567890abcdef1234567890abcdef12345678'] });
      }
      // Mock the response for net_version
      if (payload.method === 'net_version') {
        callback(null, { jsonrpc: '2.0', result: '5777' }); // Ganache network ID
      }
      // Add other method mocks as needed
    },
  };

  const web3 = new Web3(mockProvider);
  return web3;
};

export default getMockWeb3;
