import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Marketplace from '../../ethereum/marketplace';
import { Header, Card, Icon, Divider, Table, Grid, Form, Input, Button, Message } from 'semantic-ui-react';
import { Link, Router } from '../../routes';
import web3 from '../../ethereum/web3';

class ViewStakeholderInfo extends Component {
  state = {
    price: '',
    errorMessage: '',
    loading: false
  };

  static async getInitialProps(props) {
    const marketplace = Marketplace(props.query.address);

    const productInfo = await marketplace.methods.getProductInfo().call();



    console.log(props.query);
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
      marketplace: marketplace,
      percentage: productInfo[9],
      movieAddress: productInfo[10],
      groupAddress: productInfo[11],
      title: productInfo[12]
    };
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
      </React.Fragment>
    );
  }

  onSubmit = async (event) => {
    event.preventDefault();

    console.log(this.state.price);
    console.log(this.props.address);
    const marketplace = Marketplace(this.props.address);

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      console.log(accounts[0]);
      console.log('reach here');
      await marketplace.methods.listForSales(this.state.price)
        .send({
          from: accounts[0]
      });

      Router.pushRoute('/');
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  renderListPriceForm() {
      return (

            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
              <Form.Field>

                <label>List a price to sell this stakeholder</label>
                <Input
                  label='ether'
                  labelPosition='right'
                  value={this.state.price}
                  onChange={event => this.setState({ price: event.target.value })}
                  fluid
                />
              </Form.Field>

              <Message error header="Oops!" content={this.state.errorMessage} />
              <Button color='teal'>List For Sales</Button>
            </Form>


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
            {this.renderListPriceForm()}
            <br />
            <Link route={`/user/show`}>
              <a>
                <Button secondary>Back</Button>
              </a>
            </Link>
          </Grid.Column>
        </Grid>

      </Layout>
    );
  }
}

export default ViewStakeholderInfo;
