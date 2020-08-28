import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Marketplace from '../ethereum/marketplace';

class OfferRow extends Component {
  state = {
    purchased: false
  };



  onAccept = async () => {
    const marketplace = Marketplace(this.props.address);

    const accounts = await web3.eth.getAccounts();
    await marketplace.methods.acceptOffer().send({
      from: accounts[0]
    });

    const purchased = await marketplace.methods.purchased().call();
    this.setState({ purchased });

  }

  render() {
    const { Row, Cell } = Table;

    return (
      <Row disabled={this.state.purchased}>
        <Cell>{this.props.highestBidder}</Cell>
        <Cell>{web3.utils.fromWei(this.props.highestOfferPrice, 'ether')}</Cell>
        <Cell>{this.props.highestOfferMessage}</Cell>
        <Cell>
          {this.state.purchased ? null : (
            <Button color="green" basic onClick={this.onAccept}>
              Accept
            </Button>
        )}
        </Cell>
      </Row>
    );
  }
}

export default OfferRow;
