import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import Marketplace from '../../../ethereum/marketplace'
import { Header, Grid, Card, Segment, Button, Divider, Table } from 'semantic-ui-react';
import { Link } from '../../../routes';
import web3 from '../../../ethereum/web3';

class OfferCheckout extends Component {
  static async getInitialProps(props) {
    const marketplace = Marketplace(props.query.address);

    const productInfo = await marketplace.methods.getProductInfo().call();

    const offerInfo = await marketplace.methods.getOfferInfo().call();

    return {
      address: props.query.address,
      manager: productInfo[0],
      listedPrice: productInfo[1],
      productDescription: productInfo[2],
      productCondition: productInfo[3],
      purchased: productInfo[4],
      newProductOwner: productInfo[5],
      stakeholderType: productInfo[6],
      fixedAmountToRecoup: productInfo[7],
      amountRecouped: productInfo[8],
      highestOfferPrice: offerInfo[1]
    };
  }

  renderSummary() {

    const {
      address,
      productDescription,
      productCondition,
      stakeholderType,
      fixedAmountToRecoup,
      amountRecouped
    } = this.props;


    let productCond;

    if (productCondition == '0') {
      productCond = 'Available';
    } else {
      productCond = 'Not Available';
    }
    return (

      <Card fluid>
        <Card.Content>
          <Card.Header>
            Review Project
          </Card.Header>
          <Divider />
          <Card.Description>
            seller: {address}
          </Card.Description>

          <Divider />
          <Card.Header>
            Description:
          </Card.Header>
          <Card.Description>
            {productDescription}
          </Card.Description>
          <Table definition>
            <Table.Body>
              <Table.Row>
                <Table.Cell width={4}>Product Condition</Table.Cell>
                <Table.Cell>{productCond}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Stakeholder Type</Table.Cell>
                <Table.Cell>{stakeholderType}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Fixed Amount To Recoup ($)</Table.Cell>
                <Table.Cell>{fixedAmountToRecoup}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Amount Recouped ($)</Table.Cell>
                <Table.Cell>{amountRecouped}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Card.Content>
      </Card>
    );
  }

  renderPrice() {
    const { highestOfferPrice } = this.props;

    return (
      <Card fluid>
        <Card.Content>
          <Segment vertical>
            <Grid>
              <Grid.Column floated='left' width={8}>
                <Card.Header as='h3'>Your Offer: </Card.Header>
                <Card.Header as='h3'>Processing Fee: </Card.Header>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Card.Header as='h3'> ether</Card.Header>
                <Card.Header as='h3'>ether</Card.Header>
              </Grid.Column>
            </Grid>

          </Segment>
          <Segment vertical>
          <Grid>
            <Grid.Column floated='left' width={8}>
              <Header>
                Order total:
              </Header>
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              <Header>
                ether
              </Header>
            </Grid.Column>
          </Grid>

          <Link route={`/products/${this.props.address}/checkout/buytermconds`}>
            <a>
              <Button fluid primary style={{ marginTop: '10px' }}>Confirm to Make Offer</Button>
            </a>
          </Link>

          <Link route={`/products/${this.props.address}`}>
            <a>
              <Button fluid color='grey' style={{ marginTop: '10px' }}>Cancel</Button>
            </a>
          </Link>
          </Segment>
        </Card.Content>
      </Card>
    );
  }

  renderPriceInfo() {
    return (
      <Card fluid>
        <Card.Content>
          <Card.Description>
            You are about to make an offer to this product, after hitting Confirm to Make Offer
            button, it will direct you to metamask page to confirm the offer.

          </Card.Description>
        </Card.Content>
      </Card>
    );
  }

  render() {
    return (
      <Layout>
        <Header size='huge'>
          Checkout
        </Header>
        <Grid>
          <Grid.Column width={10}>
            {this.renderSummary()}
          </Grid.Column>

          <Grid.Column width={6}>
            {this.renderPrice()}
            {this.renderPriceInfo()}

          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default OfferCheckout;
