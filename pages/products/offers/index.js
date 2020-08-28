import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Layout from '../../../components/Layout';
import Marketplace from '../../../ethereum/marketplace';
import OfferRow from '../../../components/OfferRow';

class OfferIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    const marketplace = Marketplace(address);

    const offerInfo = await marketplace.methods.getOfferInfo().call();
    const purchased = await marketplace.methods.purchased().call();

    return {
      address: address,
      highestBidder: offerInfo[0],
      highestOfferPrice: offerInfo[1],
      highestOfferMessage: offerInfo[2]
    };
  }

  renderRow() {
    return <OfferRow
      highestBidder={this.props.highestBidder}
      highestOfferPrice={this.props.highestOfferPrice}
      highestOfferMessage={this.props.highestOfferMessage}
      address={this.props.address}
    />;
  }

  render() {

    const { Header, Row, HeaderCell, Body } = Table;
    return (
      <Layout>
        <h3>Current Highest Offer</h3>
        <Link route={`/products/${this.props.address}/offers/new`}>
          <a>
            <Button primary floated="right" style={{ marginBottom: 10 }}>
              Make an Offer
            </Button>
          </a>
        </Link>

        <Table>
          <Header>
            <Row>
              <HeaderCell>Offer Owner Address</HeaderCell>
              <HeaderCell>Amount (ether)</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Accept Offer</HeaderCell>
            </Row>
          </Header>
          <Body>
            {this.renderRow()}
          </Body>
        </Table>

        <Link route={`/products/${this.props.address}/offers/withdraw`}>
          <a>
            <Button secondary style={{ marginTop: 10 }}>
              Withdraw
            </Button>
          </a>
        </Link>

        <Link route={`/products/${this.props.address}`}>
          <a>
            <Button secondary floated="right" style={{ marginTop: 10 }}>
              Back
            </Button>
          </a>
        </Link>
      </Layout>
    );
  }
}

export default OfferIndex;
