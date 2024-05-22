import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import getWeb3 from './getWeb3';
import LandRegistry from './contracts/LandRegistry.json';
import RegisterLand from './components/RegisterLand';
import FetchLandInfo from './components/FetchLandInfo';
import GrantDeed from './components/GrantDeed';
import CityCouncil from './components/CityCouncil';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

function App() {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [landRegistryContract, setLandRegistryContract] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        const web3Instance = await getWeb3();
        const accounts = await web3Instance.eth.getAccounts();
        const networkId = await web3Instance.eth.net.getId();

        const deployedNetwork = LandRegistry.networks[networkId];
        if (!deployedNetwork) {
          throw new Error('Contract not deployed on current network');
        }

        const landRegistryInstance = new web3Instance.eth.Contract(
          LandRegistry.abi,
          deployedNetwork && deployedNetwork.address,
        );

        setWeb3(web3Instance);
        setAccounts(accounts);
        setLandRegistryContract(landRegistryInstance);
        setLoading(false);
      } catch (error) {
        console.error('Could not connect to wallet', error);
        setLoading(false);
      }
    };

    init();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!web3) {
    return <div>Please install MetaMask to use this app.</div>;
  }

  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/">Land Registry</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/register">Register Land</Nav.Link>
              <Nav.Link as={Link} to="/fetch">Fetch Land Info</Nav.Link>
              <Nav.Link as={Link} to="/grant">Grant Deed</Nav.Link>
              <Nav.Link as={Link} to="/city-council">City Council</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="container mt-4">
          <Routes>
            <Route path="/register" element={<RegisterLand web3={web3} landRegistryContract={landRegistryContract} accounts={accounts} />} />
            <Route path="/fetch" element={<FetchLandInfo web3={web3} landRegistryContract={landRegistryContract} />} />
            <Route path="/grant" element={<GrantDeed web3={web3} landRegistryContract={landRegistryContract} accounts={accounts} />} />
            <Route path="/city-council" element={<CityCouncil web3={web3} landRegistryContract={landRegistryContract} accounts={accounts} />} />
            <Route path="/" element={
              <>
                <h2>Welcome to the Harare Land Registry System</h2>
                <p>Use the navigation bar to register land, fetch land information, initiate transfers, and perform city council operations.</p>
              </>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
