pragma solidity ^0.4.17;

contract CreateProduct {
    address[] deployedProducts;
    Review[] public reviews;
    User[] public users;
    uint public userCount;
    mapping (address => uint) addressId;

    // Login
    bool public login;
    address public loginAddress;
    mapping (address => string) loginPassword;

    event ProductCreated(address indexed owner, address indexed productId);
    event AccountCreated();

    struct Review {
        address id;
        string name;
        string reviewMessage;
    }

    struct Movie {
        uint id;
        string title;
        string description;
    }

    Movie[] public movies;
    uint public movieCount;

    struct User {
        uint userId;
        address id;
        string email;
        string firstname;
        string lastname;
        address[] stakeholders;
        string password;
    }


    function createUser(string _email, string _firstname, string _lastname, string _password) public {

        User memory user;
        user.userId = userCount;
        user.id = msg.sender;
        user.email = _email;
        user.firstname = _firstname;
        user.lastname = _lastname;
        user.password = _password;

        users.push(user);
        addressId[msg.sender] = userCount;
        loginPassword[msg.sender] = _password;

        userCount += 1;
    }

    function getUserIdFromAddress(address _addressId) public view returns (uint) {
        uint _id = addressId[_addressId];
        return _id;
    }

    // return user information
    function getUser(address _addressId) public view returns (address, string, string, string, address[]) {

        // need to add check whether user exist
        uint _id = getUserIdFromAddress(_addressId);
        User storage user = users[_id];
        return (
            user.id, user.email, user.firstname, user.lastname, user.stakeholders
        );
    }

    function login(address id, string _password) public {
        uint _id = getUserIdFromAddress(id);
        User storage user = users[_id];
        require(msg.sender == id && user.id == msg.sender, "Only owner of this address can login");
        require(keccak256(abi.encodePacked(_password)) == keccak256(abi.encodePacked(user.password)), "Password does not match");
        login = true;
        loginAddress = id;
        updateStakeholders(id);
    }

    function logout() public returns (bool) {
        login = false;
        loginAddress = address(0);
    }

    // create new stakes
    function newProduct(string title, string description, uint amountToRecoup, uint amountAlreadyRecouped, uint percentage, address movieAddress, address groupAddress, uint stakeholderType) public {
        // check login is true first
        require(login == true);

        address product = new Marketplace(title, description, amountToRecoup, amountAlreadyRecouped, percentage, movieAddress, groupAddress, stakeholderType, msg.sender, address(this));
        deployedProducts.push(product);
        emit ProductCreated(msg.sender, product);

        uint userId = getUserIdFromAddress(msg.sender);
        User storage user = users[userId];
        user.stakeholders.push(product);
    }

    // return stakeholders of a specific client address
    function getAllStakeholdersFromUserAddress(address _id) public view returns (address[]) {
        uint userId = getUserIdFromAddress(_id);
        User storage user = users[userId];
        return user.stakeholders;
    }

    // add the parameter to the stakeholder
     function addStakeholderToOwner(address userAddress, address contractAddress) public {
        uint userId = getUserIdFromAddress(userAddress);
        User storage user = users[userId];
        user.stakeholders.push(contractAddress);
    }

    function updateStakeholders(address _id) public {
        uint userId = getUserIdFromAddress(_id);
        User storage user = users[userId];
        for (uint i = 0; i < user.stakeholders.length; i++) {
            address a = user.stakeholders[i];
            if (a == address(0)) {
                continue;
            } else {
                Marketplace m = Marketplace(a);
                address conManager = m.getManager();
                if (conManager != _id) {
                    // owner of contract has changed
                    delete user.stakeholders[i];
                    addStakeholderToOwner(conManager, address(m));
                }
            }

        }
    }

    // return the arrays of available stakes on the market
    function getDeployedProducts() public view returns (address[]) {
        return deployedProducts;
    }

    // return number of stakes on the market
    function getDeployedProductsCount() public view returns (uint) {
        return deployedProducts.length;
    }

    /*function createReview(string name, string message) public {

        reviews.push(Review({
            id: msg.sender,
            name: name,
            reviewMessage: message
        }));
    }*/

    function createMovie(string _title, string _description) public {

        Movie memory movie;
        movie.id = movieCount;
        movie.title = _title;
        movie.description = _description;

        movies.push(movie);

        movieCount += 1;
    }

    function getMovie(uint _id) public view returns (uint, string, string) {
        Movie storage movie = movies[_id];
        return (
            movie.id,
            movie.title,
            movie.description
        );
    }

}


contract Marketplace {

    enum ProductCondition { //Deploy means available for sales
        DEPLOYED,
        NOTDEPLOYED
    }

    address public factoryContractAddress;

    // move to other contract
    enum StakeholderType {
        GrossPercentage,
        NetPercentage,
        CappedGrossPercentage,
        CappedNetPercentage,
        ProfitParticipation,
        Expense
    }

    struct Group {
        uint id;
        string name;
        Tranche tranche;
    }

    Group[] public groups;
    uint public groupCount;

    struct Tranche {
        uint id;
        string displayName;
        uint position;
    }

    Tranche[] public tranches;
    uint public trancheCount;

    // Attributes for stakeholder
    address public manager;
    uint public listedPrice;
    string public title;
    string public productDescription;
    ProductCondition public productCondition;
    bool public purchased;
    address public newProductOwner;
    StakeholderType public stakeholderType;
    uint public fixedAmountToRecoup;
    uint public amountRecouped;
    uint public percentage;
    address public movieAddress;
    address public groupAddress;

    // Events
    event ProductUpdated();
    event ProductWithdrawn();
    event OfferWithdrawn();
    event StakeholderListedForSales(uint price);
    event BuyNow();
    event OfferCreated(address indexed bidder, uint price, string description);

    struct Offer {
        uint offerId;
        address offerAddress;
        uint offerValue;
        string offerMessage;
    }

    // parameters for offers
    address public highestBidder;
    uint public highestOfferPrice;
    string public highestOfferMessage;
    uint public highestOfferId;
    uint public offerCount = 0;
    Offer[] public offers;
    mapping(uint => uint) offerMaps;
    mapping (address => uint) amountToRefund;

    event ProductCreated(string description, uint price, uint amountToRecoup, uint amountAlreadyRecouped);
    event OfferCreated();

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }


    function Marketplace(string _title, string description, uint amountToRecoup, uint amountAlreadyRecouped, uint percentageVal, address movieAddressId, address groupAddressId, uint stakeholderTypeVal, address creator, address factoryContact) public {
        manager = creator;
        title = _title;
        productDescription = description;
        productCondition = ProductCondition.NOTDEPLOYED;
        fixedAmountToRecoup = amountToRecoup;
        amountRecouped = amountAlreadyRecouped;
        percentage = percentageVal;
        movieAddress = movieAddressId;
        groupAddress = groupAddressId;

        if (stakeholderTypeVal == 0) {
            stakeholderType = StakeholderType.GrossPercentage;
        } else if (stakeholderTypeVal == 1) {
            stakeholderType = StakeholderType.NetPercentage;
        } else if (stakeholderTypeVal == 2) {
            stakeholderType = StakeholderType.CappedGrossPercentage;
        } else if (stakeholderTypeVal == 3) {
            stakeholderType = StakeholderType.CappedNetPercentage;
        } else if (stakeholderTypeVal == 4) {
            stakeholderType = StakeholderType.ProfitParticipation;
        } else {
            stakeholderType = StakeholderType.Expense;
        }

        factoryContractAddress = factoryContact;
        // Set highest offer and bidder to initial state
        highestBidder = address(0);
        highestOfferPrice = 0;
        purchased = false;
        newProductOwner = address(0);
    }

    function listForSales(uint price) public restricted {
        listedPrice = price;
        productCondition = ProductCondition.DEPLOYED;
        emit StakeholderListedForSales(price);
    }

    function getManager() public view returns (address) {
        return manager;
    }

    function updateProduct(string description, uint price, uint amountToRecoup, uint amountAlreadyRecouped) public restricted {
        productDescription = description;
        listedPrice = price;
        fixedAmountToRecoup = amountToRecoup;
        amountRecouped = amountAlreadyRecouped;

        emit ProductUpdated();
    }

    function withdrawProduct() public restricted {
        productCondition = ProductCondition.NOTDEPLOYED;
        emit ProductWithdrawn();
    }

    function createGroup(uint _id, string _name, uint trancheId, string trancheDisplayName, uint tranchePosition) public {
        Group memory group;

        group.id = _id;
        group.name = _name;

        Tranche memory _tranche;
        _tranche.id = trancheId;
        _tranche.displayName = trancheDisplayName;
        _tranche.position = tranchePosition;

        group.tranche = _tranche;

        groups.push(group);

    }

    function getGroup(uint _id) public view returns (uint, string, uint, string, uint) {
        Group storage group = groups[_id];
        return (
            group.id, group.name, group.tranche.id, group.tranche.displayName, group.tranche.position
        );
    }

    function createTranche(uint _id, string _displayName, uint _position) public {
        Tranche memory tranche;
        tranche.id = _id;
        tranche.displayName = _displayName;
        tranche.position = _position;

        tranches.push(tranche);
    }

    function getTranche(uint _id) public view returns (uint, string, uint) {
        Tranche storage tranche = tranches[_id];
        return (
          tranche.id, tranche.displayName, tranche.position
        );
    }

    // buy the listed equity directly
    function buyEquity() public payable {
        // calculate the subtotal price

        require(msg.value >= listedPrice, "Not enough money is inserted.");
        require(productCondition == ProductCondition.DEPLOYED, "This product is already deleted");
        require(purchased == false, "This product is already sold out");

        // refund the amount that is more than expected listed price
        if (msg.value > listedPrice) {
            uint refund = msg.value - (listedPrice * 1000000000000000000);
            msg.sender.transfer(refund);
        }

        highestBidder = msg.sender;
        // still set highest offer to listed price
        highestOfferPrice = listedPrice;
        purchased = true;
        offerOwnership(msg.sender);
        claimProductOwnership();
        emit BuyNow();
    }

    // Assumes that only highest offer will exist
    function makeOffer(string description) public payable {
        //require(msg.value > highestOfferPrice, "Error!, The amount inserted is currently less than the highest offer");


        if (highestBidder != address(0)) {
            // Refund the prevoid highestBidder
            amountToRefund[highestBidder] = highestOfferPrice;
        }


        Offer memory newOffer = Offer({
            offerId: offerCount,
           offerAddress: msg.sender,
           offerValue: msg.value,
           offerMessage: description
        });

        offers.push(newOffer);
        offerMaps[offerCount] = msg.value;

        // Check whether it is the highest offer
        if (msg.value > highestOfferPrice) {
            highestOfferPrice = msg.value;
            highestOfferMessage = description;
            highestBidder = msg.sender;
            highestOfferId = offerCount;
        }

        offerCount+=1;
        emit OfferCreated(msg.sender, msg.value, description);

    }

    // withdraw offer from the offerlist
    function withdrawOffer(uint id) public {
        Offer storage offer = offers[id];
        require(msg.sender == offer.offerAddress || msg.sender == manager);
        refundBuyer(id);
        emit OfferWithdrawn();
        delete offers[id];
    }

    // Accept the highest offer that is listed
    function acceptOffer() public restricted {
        purchased = true;
        offerOwnership(highestBidder);
        claimProductOwnershipOffer();
    }

    // refund buyer by adding to the amountToRefund mapping
    function refundBuyer(uint id) public {
        Offer storage offer = offers[id];
        address refundAddress = offer.offerAddress;
        if (refund > 0) {
          // set refund amount to 0 to prevent user to try to refund again
          amountToRefund[refundAddress] = 0;
          refundAddress.transfer(refund);
        }

    }


    // Can call withdraw when you delted the offer or you did not win the bid
    function withdraw() public {
        uint refund = amountToRefund[msg.sender];
        address adressToRefund = msg.sender;
        if (refund > 0) {
            // set refund amount to 0 to prevent user to try to refund again
            amountToRefund[msg.sender] = 0;
            adressToRefund.transfer(refund);
        }
    }

    // call this function when the creator accept the offer or product is purchased
    // will be private
    function offerOwnership(address beneficiary) public {
        require(newProductOwner == address(0), " This product already has a new owner");
        require(beneficiary == highestBidder);
        newProductOwner = highestBidder;

    }

    function claimProductOwnership() public {
        manager.transfer(listedPrice * 1000000000000000000);
        //update stakeholders for old first

        address oldManager = manager;
        manager = newProductOwner;
        CreateProduct c = CreateProduct(factoryContractAddress);
        c.updateStakeholders(oldManager);
        c.updateStakeholders(manager);
        newProductOwner = address(0);
        productCondition = ProductCondition.NOTDEPLOYED;
        delete offers;
        highestBidder = address(0);
        highestOfferPrice = 0;
        highestOfferMessage = "";
    }

    function claimProductOwnershipOffer() public {
        manager.transfer(highestOfferPrice);

        address oldManager = manager;
        manager = newProductOwner;
        CreateProduct c = CreateProduct(factoryContractAddress);
        c.updateStakeholders(oldManager);
        c.updateStakeholders(manager);
        newProductOwner = address(0);
        productCondition = ProductCondition.NOTDEPLOYED;
        delete offers;
        highestBidder = address(0);
        highestOfferPrice = 0;
        highestOfferMessage = "";
    }

    function getOfferInfo() public view returns (address, uint, string) {
        return (
            highestBidder, highestOfferPrice, highestOfferMessage
        );
    }

    function getProductInfo() public view returns (address, uint, string, ProductCondition, bool, address, StakeholderType, uint, uint, uint, address, address, string) {
        return (
            manager,
            listedPrice,
            productDescription,
            productCondition,
            purchased,
            newProductOwner,
            stakeholderType,
            fixedAmountToRecoup,
            amountRecouped,
            percentage,
            movieAddress,
            groupAddress,
            title
        );
    }

    function getRefundAmount(address index) public view returns (uint) {
        return amountToRefund[index];
    }


    function totalOffers() public view returns (uint) {
        return offers.length;
    }


    function getOffer(uint id) public view returns (uint, address, uint, string) {
        Offer storage offer = offers[id];
        return (
            offer.offerId, offer.offerAddress, offer.offerValue, offer.offerMessage
        );
    }




}
