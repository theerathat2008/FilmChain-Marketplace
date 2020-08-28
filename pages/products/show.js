import React, { Component } from 'react';
import { Card, Grid, Button, Divider, Header, Icon, Table } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Marketplace from '../../ethereum/marketplace';
import OfferForm from '../../components/OfferForm';
import { Link } from '../../routes';

class ProductShow extends Component {
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

  renderCards() {


    const {
      manager,
      listedPrice,
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

    const items = [
      {
        header: productDescription,
        meta: 'Product Description',
        description: 'The details of the product',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: productCond,
        meta: 'Product Condition',
        description: 'Indicates the availability of this stakeholder for sales',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: stakeholderType,
        meta: 'Stakeholder Type',
        description: 'The type listed of the stakeholder type of this product',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: fixedAmountToRecoup,
        meta: 'Fixed Amount to Recoup ($)',
        description: 'The amount of money you will receive in the future if you own this stakeholder',
        style: { overflowWrap: 'break-word'}
      },
      {
        header: amountRecouped,
        meta: 'Amount Recouped ($)',
        description: 'The amount of money the owner of this stakeholder already recouped from this equity',
        style: { overflowWrap: 'break-word'}
      }
    ];

    return <Card.Group items={items} />;
  }

  renderHeader() {
    const { title } = this.props;

    return (
      <Header as='h1'>
        <Icon name='plug' />
        <Header.Content>{title}</Header.Content>
      </Header>
    );
  }

  renderDescription() {
    const {
      title,
      productDescription,
      productCondition,
      stakeholderType,
      fixedAmountToRecoup,
      amountRecouped,
      percentage,
      movieAddress,
      groupAddress
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
      <React.Fragment>
        <Divider horizontal>
        <Header as='h4'>
          <Icon name='tag' />
          Description
        </Header>
        </Divider>

        <p>
          {productDescription}
        </p>

        <Divider horizontal>
          <Header as='h4'>
            <Icon name='bar chart' />
            Specifications
          </Header>
        </Divider>

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
              <Table.Cell>Percentage (%)</Table.Cell>
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
      </React.Fragment>
    );
  }

  renderPrice() {
    const { listedPrice, productCondition } = this.props;
    const usd = listedPrice * 242.47;

    const items = [
      {
          header: listedPrice,
          meta: 'Product Price (ether)',
          description: 'To buy this product you can buy now from the listed price or make an offer to the product owner',
          style: {overflowWrap: 'break-word' }

      }
    ];

    if (productCondition == '0') {
      return (
        <Card>
          <Card.Content>
            <Card.Header>{listedPrice} ether    (${usd})</Card.Header>
            <Card.Meta>Stake Price (ether)</Card.Meta>
            <Card.Description>
              To buy this product you can buy now from the listed price or make an offer to the product owner
            </Card.Description>
          </Card.Content>
          <Card.Content extra>

            <Link route={`/products/${this.props.address}/checkout/buytermconds`}>
              <a>
                <Button fluid="true" primary style={{ marginTop: '10px' }}>Buy Now</Button>
              </a>
            </Link>
          </Card.Content>
        </Card>
      );
    } else {
      return (
        <Card>
          <Card.Content>
            <Card.Header>Unavailable</Card.Header>
            <Card.Description>
              This stakeholder is currently unavailable for sales
            </Card.Description>
          </Card.Content>
        </Card>
      );
    }

  }

  renderOffer() {
    const { productCondition } = this.props;

    if (productCondition == '0') {
      return (
        <Card>
          <Card.Content>
            <Card.Header>Best Offer:</Card.Header>

          </Card.Content>
          <Card.Content extra>
            <Link route={`/products/${this.props.address}/offers/new`}>
              <a>
                <Button fluid="true" primary style={{ marginTop: '10px' }}>Make an Offer</Button>
              </a>
            </Link>

            <br />
            <Link route={`/products/${this.props.address}/offers`}>
              <a>
                <Button fluid="true"primary style={{ marginTop: '10px' }}>View Offers</Button>
              </a>
            </Link>
          </Card.Content>

        </Card>

      );
    } else {
      return (
        <Card>
          <Card.Content>
            <Card.Header>Unavailable</Card.Header>
            <Card.Description>
              This stakeholder is currently not available to make offers
            </Card.Description>
          </Card.Content>
        </Card>
      );
    }


  }

  renderSellerInfo() {

    const { manager } = this.props;

    return (
      <Card style={{ overflowWrap: 'break-word'}}>
        <Card.Content>
          <Card.Header>Seller Information</Card.Header>
          <Card.Description>
            Address of seller
          </Card.Description>
          <Card.Meta>{manager}</Card.Meta>

        </Card.Content>
      </Card>
    );
  }

  render() {

    return (
      <Layout>
        <Header as='h3' block>
          Project Details
        </Header>
        <Grid>
          <Grid.Column width={10}>
            {this.renderHeader()}
            {this.renderDescription()}
          </Grid.Column>

          <Grid.Column width={6}>
            {this.renderPrice()}


            {this.renderOffer()}
            {this.renderSellerInfo()}

          </Grid.Column>
        </Grid>


      </Layout>
    );
  }
}

export default ProductShow;
