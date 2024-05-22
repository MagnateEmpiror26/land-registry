// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LandRegistry {
    struct Land {
        string location;
        uint256 area;
        address owner;
        bool verified;
    }

    mapping(uint256 => Land) public lands;
    uint256 public landCount;

    event LandRegistered(uint256 landId, string location, uint256 area, address owner);
    event DeedGranted(uint256 landId, address newOwner);
    event LandVerified(uint256 landId, bool verified);

    function registerLand(string memory location, uint256 area) public {
        landCount++;
        lands[landCount] = Land(location, area, msg.sender, false);
        emit LandRegistered(landCount, location, area, msg.sender);
    }

    function getLandInfo(uint256 landId) public view returns (string memory, uint256, address, bool) {
        Land memory land = lands[landId];
        return (land.location, land.area, land.owner, land.verified);
    }

    function grantDeed(uint256 landId, address newOwner) public {
        require(lands[landId].owner == msg.sender, "Only the owner can grant the deed");
        lands[landId].owner = newOwner;
        emit DeedGranted(landId, newOwner);
    }

    function verifyLand(uint256 landId) public {
        lands[landId].verified = true;
        emit LandVerified(landId, true);
    }
}
