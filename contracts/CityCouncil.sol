// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./LandRegistry.sol";

contract CityCouncil {
    address public admin;
    LandRegistry landRegistry;

    event LandVerified(uint256 landId, bool verified);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    constructor(address landRegistryAddress) {
        admin = msg.sender;
        landRegistry = LandRegistry(landRegistryAddress);
    }

    function verifyLand(uint256 landId) public onlyAdmin {
        landRegistry.verifyLand(landId);
        emit LandVerified(landId, true);
    }
}
