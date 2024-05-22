### README.md for Land Registry Project

---

# Land Registry Blockchain Project

## Overview

This project aims to revolutionize land management and administration by leveraging blockchain technology. By creating a decentralized land registry system and implementing smart contracts, the project enhances transparency, security, and efficiency in land transactions.

### Key Objectives

1. Establish a decentralized land registry system using blockchain technology.
2. Enable residents to securely register and verify land ownership using smart contracts.
3. Facilitate seamless land transfers and ownership transactions through digital deeds.
4. Provide administrative functions for the city council to manage land information and transactions.

### Key Components

1. **LandRegistry Smart Contract:** Manages land information on the blockchain.
2. **CityCouncil Smart Contract:** Provides administrative functions for land management.
3. **DeedOfGrant Smart Contract:** Represents the grant of land ownership.
4. **DeedOfTransfer Smart Contract:** Facilitates the transfer of land ownership.
5. **Front-End Application:** Interface for residents to interact with the blockchain system.

### Features

- Land Registration
- Verification
- Deed Issuance
- Digital Signatures
- Access Control

### Benefits

- Transparency
- Security
- Efficiency
- Accessibility
- Trust

---

## Prerequisites

### 1. MetaMask

MetaMask is a browser extension that allows you to interact with the Ethereum blockchain.

- Install MetaMask from [here](https://metamask.io/).
- Create a new wallet or import an existing one.
- Ensure MetaMask is connected to the correct network (e.g., Localhost 8545).

### 2. Ganache

Ganache is a personal blockchain for Ethereum development you can use to deploy contracts, develop applications, and run tests.

- Download and install Ganache from [here](https://www.trufflesuite.com/ganache).
- Create a new workspace or quickstart a new workspace.
- Make sure Ganache is running and note the network ID (typically 5777) and RPC server URL (http://127.0.0.1:7545).

### 3. Node.js and npm

Ensure you have Node.js and npm installed.

- Download and install Node.js from [here](https://nodejs.org/).

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/land-registry.git
cd land-registry
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure MetaMask to Connect to Ganache

- Open MetaMask.
- Click the network dropdown and select "Custom RPC".
- Enter the Ganache RPC Server URL (e.g., http://127.0.0.1:7545) and network ID (e.g., 5777).

### 4. Fund MetaMask Account

- Copy the MetaMask account address.
- Open Ganache and click on the key icon next to an account to copy its private key.
- Import the private key into MetaMask to add the Ganache account, which will automatically fund it with Ether from Ganache.

### 5. Deploy Contracts

Ensure Ganache is running and then deploy the contracts using Truffle:

```bash
truffle migrate --network development
```

### 6. Start the Application

```bash
npm start
```

The application will run on `http://localhost:3000`.

---

## Usage

### Register Land

1. Navigate to the "Register Land" page.
2. Enter the required details and submit.

### Fetch Land Information

1. Navigate to the "Fetch Land Info" page.
2. Enter the land ID and submit to view details.

### Grant Deed

1. Navigate to the "Grant Deed" page.
2. Enter the deed details and submit.

### Transfer Deed

1. Navigate to the "Transfer Deed" page.
2. Enter the transfer details and submit.

---

## Project Structure

```plaintext
land-registry/
├── build/
├── contracts/
│   ├── CityCouncil.sol
│   ├── DeedOfGrant.sol
│   ├── DeedOfTransfer.sol
│   ├── LandRegistry.sol
├── migrations/
│   ├── 1_initial_migration.js
│   ├── 2_deploy_contracts.js
├── public/
├── src/
│   ├── components/
│   │   ├── FetchLandInfo.js
│   │   ├── GrantDeed.js
│   │   ├── RegisterLand.js
│   │   ├── TransferDeed.js
│   ├── App.js
│   ├── index.js
├── test/
├── truffle-config.js
├── package.json
├── README.md
```

---

## Troubleshooting

### Common Issues

- **MetaMask Not Connecting:** Ensure MetaMask is connected to the correct network (Ganache).
- **Insufficient Funds:** Make sure your MetaMask account is funded from Ganache.
- **Contract Not Deployed:** Ensure you have deployed the contracts to the correct network using Truffle.

### Useful Commands

- **Compile Contracts:** `truffle compile`
- **Migrate Contracts:** `truffle migrate --network development`
- **Run Tests:** `truffle test`

---

## Contributing

Contributions are welcome! Please create an issue or pull request for any changes.

---

## License

This project is licensed under the MIT License.

---

By following these instructions, you should be able to set up, deploy, and run the Land Registry project on your local machine.