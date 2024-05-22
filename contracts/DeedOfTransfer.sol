// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DeedOfTransfer {
    address public currentOwner;
    address public newOwner;
    uint256 public landId;
    bool public signed;

    event DeedSigned(address indexed newOwner, uint256 landId);

    constructor(address _currentOwner, address _newOwner, uint256 _landId) {
        currentOwner = _currentOwner;
        newOwner = _newOwner;
        landId = _landId;
        signed = false;
    }

    function signDeed() public {
        require(msg.sender == newOwner, "Only the new owner can sign the deed");
        signed = true;
        emit DeedSigned(newOwner, landId);
    }
}
