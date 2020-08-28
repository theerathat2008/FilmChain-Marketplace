pragma solidity ^0.4.17;

import "../../node_modules/openzeppelin-solidity/contracts/token/ERC20/BurnableToken.sol";
import "../../node_modules/openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol";
import "../../node_modules/openzeppelin-solidity/contracts/token/ERC20/DetailedERC20.sol";

contract FilmChainToken is BurnableToken, MintableToken, DetailedERC20 {
  constructor(uint256 _initialSupply) DetailedERC20("FilmChainToken", "FCT", 18) public {
    owner = msg.sender;
    mint(owner, _initialSupply);
  }
}
