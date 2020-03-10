pragma solidity >=0.4.21 <0.6.0;

contract hashGen {
    bytes32 gen_hash;

    function setGenHash(bytes32 _gen_hash) public {
        gen_hash = _gen_hash;
    }

    function getGenHash() public view returns (bytes32) {
        return gen_hash;
    }
}
