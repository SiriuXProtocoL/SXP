pragma solidity >=0.4.21 <0.6.0;

contract SiriuxToken {
    //Token Name
    string public name = "SiriuX";
    //Token Symbol
    string public Symbol = "SXP";
    //Token Standard
    string public standard = "SiriuX Token V1.0";
    uint256 public totalSupply;

    //Transfer Event Declaration 
    event Transfer(
        address indexed _from,
        address indexed _to,
        uint256 _value
    );
    
    //approval Event Declaration
    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _value
    );
     

    //mapps the key value pair for the token
    //state variable creation so we get a free getter function
    mapping(address => uint256) public balanceOf;
    //build an Allowance with nested mapping
    mapping(address => mapping(address => uint256)) public allowance;


    //constructor
    //set the total no of tokens
    //Read the total no of tokens
    constructor(uint _initialSupply) public {
        //writing to the mapping
        balanceOf[msg.sender] = _initialSupply;
        //state varable
        totalSupply = _initialSupply; //total no of tokens
    }
    //transfer function
    function transfer(address _to, uint256 _value) public returns (bool success){
        //should trigger an exception if the acc don't have enough
        require(balanceOf[msg.sender] >= _value,"error");
        //transfer the balance
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        //transfer event
        emit Transfer(msg.sender, _to, _value);
        //return a boolean
        return true;
    }

    //delegated transfer ie transfer from 3rd party accounts
    //Approve function
    function approve(address _spender, uint256 _value) public returns (bool success){
        //allowance
        allowance[msg.sender][_spender] = _value;
        //approval event
        emit Approval(msg.sender, _spender, _value);
        //returning boolean
        return true;
    }
    //TransferFrom Function
    function transferFrom(address _from, address _to, uint56 _value) public returns (bool success) {
        //Require _from has enough tokens
        require(_value <= balanceOf[_from],"error");
        //Require allowance is big enough
        require(_value <= allowance[_from][msg.sender],"error");
        //Transfer Event
        emit Transfer(_from,_to,_value);
        //Change the Balance
        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        //Update the Allowance
        allowance[_from][msg.sender] -= _value;
        //Return Boolean
        return true;
    }
    
}
