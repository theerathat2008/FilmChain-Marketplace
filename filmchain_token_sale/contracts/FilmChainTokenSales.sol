pragma solidity ^0.5.16;
import "./FilmChainToken.sol";

contract FilmChainTokenSales {

  address payable manager;
  FilmChainToken public tokenAddress;
  uint256 public tokenPrice;
  uint256 public numSoldTokens;

  event TokensSell(address indexed beneficiary, uint256 _value);

  modifier restricted() {
        require(msg.sender == manager);
        _;
  }

  constructor(FilmChainToken _tokenAddress, uint256 _tokenPrice) public {
      // admin
      manager = msg.sender;
      tokenAddress = _tokenAddress;
      tokenPrice = _tokenPrice;
  }

  function times(uint a, uint b) internal pure returns (uint c) {
    require(b == 0 || (c = a * b) / b == a);
  }

  function buyTokens(uint256 _value) public payable {
    require(msg.value == times(_value, tokenPrice));

    require(tokenAddress.balanceOf(address(this)) >= _value);

    require(tokenAddress.transfer(msg.sender, _value));

    // number of tokens sold
    numSoldTokens += _value;
    emit TokensSell(msg.sender, _value);
  }

  function exitSales() public restricted {
    require(tokenAddress.transfer(manager, tokenAddress.balanceOf(address(this))));
    selfdestruct(address(manager));
  }


}
