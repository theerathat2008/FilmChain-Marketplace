import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import { Header, Grid, Card, Segment, Button, Divider, Table } from 'semantic-ui-react';
import Marketplace from '../../../ethereum/marketplace';
import { Link } from '../../../routes';
import web3 from '../../../ethereum/web3';

class BuyNowCheckout extends Component {
  state = {
      errorMessage: '',
      loading: false
  }

  static async getInitialProps(props) {
    const marketplace = Marketplace(props.query.address);

    const productInfo = await marketplace.methods.getProductInfo().call();



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
      percentage: productInfo[9],
      movieAddress: productInfo[10],
      groupAddress: productInfo[11],
      title: productInfo[12]
    };
  }

  renderSummary() {

    const {
      address,
      manager,
      productDescription,
      productCondition,
      stakeholderType,
      fixedAmountToRecoup,
      amountRecouped,
      percentage,
      movieAddress,
      groupAddress,
      title
    } = this.props;


    let productCond;

    if (productCondition == '0') {
      productCond = 'Available';
    } else {
      productCond = 'Not Available';
    }

    let typeStakeholder;

    if (stakeholderType == '0') {
      typeStakeholder = 'Gross Percentage';
    } else if (stakeholderType == '1') {
      typeStakeholder = 'Net Percentage';
    } else if (stakeholderType == '2') {
      typeStakeholder = 'Capped Gross Percentage';
    } else if (stakeholderType == '3') {
      typeStakeholder = 'Capped Net Percentage';
    } else if (stakeholderType == '4') {
      typeStakeholder = 'Profit Participation';
    } else {
      typeStakeholder = 'Expense';
    }

    return (

      <Card fluid>
        <Card.Content>
          <Card.Header>
            Review Project
          </Card.Header>
          <Divider />
          <Card.Description>
            seller: {manager}
          </Card.Description>

          <Divider />
          <Card.Header>
            Description:
          </Card.Header>
          <Card.Description>
            {title}
          </Card.Description>
          <Table definition>
            <Table.Body>
            <Table.Row>
              <Table.Cell width={4}>Product Condition</Table.Cell>
              <Table.Cell>{productCond}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Stakeholder Type</Table.Cell>
              <Table.Cell>{typeStakeholder}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Fixed Amount To Recoup ($)</Table.Cell>
              <Table.Cell>{fixedAmountToRecoup}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Amount Recouped ($)</Table.Cell>
              <Table.Cell>{amountRecouped}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Percentage</Table.Cell>
              <Table.Cell>{percentage}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Group Address</Table.Cell>
              <Table.Cell>{groupAddress}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Movie Address</Table.Cell>
              <Table.Cell>{movieAddress}</Table.Cell>
            </Table.Row>
            </Table.Body>
          </Table>
        </Card.Content>
      </Card>
    );
  }

  handleClick = async (event) => {
    event.preventDefault();

    console.log('reach here');
    const marketplace = Marketplace(this.props.address);

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();

      await marketplace.methods.buyEquity().send({
        from: accounts[0],
        value: web3.utils.toWei(this.props.listedPrice, 'ether')
      });

      Router.pushRoute(`/products/${this.props.address}/checkout/checkout-summary`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false, value: '', description: '' });
  }

  renderPrice() {
    const { listedPrice } = this.props;
    const twoPercent = listedPrice * 0.02;
    const subtotal = listedPrice * 1.02;
    const usdListedPrice = listedPrice * 242.47;
    const usdTwoPercent = twoPercent * 242.47;
    const usdSubtotal = subtotal * 242.47;

    return (
      <Card fluid>
        <Card.Content>
          <Segment vertical>
            <Grid>
              <Grid.Column floated='left' width={8}>
                <Card.Header as='h3'>Price: </Card.Header>
                <Card.Header as='h3'>Processing Fee: </Card.Header>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Card.Header as='h3'>{listedPrice} ether (${usdListedPrice})</Card.Header>
                <Card.Header as='h3'>{twoPercent} ether (${usdTwoPercent})</Card.Header>
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
                {subtotal} ether (${usdSubtotal})
              </Header>
            </Grid.Column>
          </Grid>


              <Button
                fluid
                primary
                style={{ marginTop: '10px' }}
                onClick={this.handleClick}
              >
                Confirm and pay
              </Button>


          <Link route={`/products/${this.props.address}`}>
            <a>
              <Button
                fluid
                color='grey'
                style={{ marginTop: '10px' }}
              >
                Cancel
              </Button>
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
            You are about to purchase this product, after hitting Confirm and pay
            button, it will direct you to metamask page to confirm the purchase.

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

export default BuyNowCheckout;
