// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DeedOfGrant {
    address public grantor;
    address public grantee;
    uint256 public landId;
    bool public signed;

    event DeedSigned(address indexed grantee, uint256 landId);

    constructor(address _grantor, address _grantee, uint256 _landId) {
        grantor = _grantor;
        grantee = _grantee;
        landId = _landId;
        signed = false;
    }

    function signDeed() public {
        require(msg.sender == grantee, "Only the grantee can sign the deed");
        signed = true;
        emit DeedSigned(grantee, landId);
    }
}
