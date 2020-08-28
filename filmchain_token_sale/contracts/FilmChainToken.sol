pragma solidity ^0.5.16;

contract FilmChainToken {
  //name
  string public name = "FilmChain Token";
  //symbol
  string public symbol = "FCT";
  //Standard
  string public standard = "FilmChain Token v1.0";

  uint256 totalSupply;


  mapping(address => uint256) public balances;
  mapping(address => mapping(address => uint256)) public allowed;

  event Transfer(address indexed _accountFrom, address indexed _accountTo, uint256 _value);
  event Approval(address indexed _tokenOwner, address indexed _tokenSpender, uint256 _value);

  constructor(uint256 _initialSupply) public {
    balances[msg.sender] = _initialSupply;
    totalSupply = _initialSupply;
    // allocate the initial supply

  }

  function getTotalSupply() public view returns (uint256) {
    return totalSupply;
  }

  function balanceOf(address tokenOwner) public view returns(uint256) {
    return balances[tokenOwner];
  }

  //Transfer amount of token to balance
  //Trigger transfer event
  function transfer(address _addressTo, uint256 _value) public returns(bool success) {
    require(balances[msg.sender] >= _value);
    balances[msg.sender] -= _value;
    balances[_addressTo] += _value;

    emit Transfer(msg.sender, _addressTo, _value);
    return true;
  }

  function approve(address _approveAddress, uint256 _value) public returns(bool success) {

    allowed[msg.sender][_approveAddress] = _value;
    emit Approval(msg.sender, _approveAddress, _value);
    return true;
  }

  function transferFrom(address _addressFrom, address _addressTo, uint256 _value) public returns(bool success) {
    require(balances[_addressFrom] >= _value);
    require(allowed[_addressFrom][msg.sender] >= _value);
    balances[_addressFrom] -= _value;
    balances[_addressTo] += _value;

    allowed[_addressFrom][msg.sender] -= _value;

    emit Transfer(_addressFrom, _addressTo, _value);
    return true;
  }








}
