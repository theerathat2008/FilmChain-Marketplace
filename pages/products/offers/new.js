import React, { Component } from 'react';
import { Form, Button, Message, Input } from 'semantic-ui-react';
import Marketplace from '../../../ethereum/marketplace';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout';

class OfferNew extends Component {
  state = {
    value: '',
    description: '',
    errorMessage: '',
    loading: false
  };

  static async getInitialProps(props) {
    const { address } = props.query;

    return { address };
  }

  onSubmit = async (event) => {
    event.preventDefault();

    const marketplace = Marketplace(this.props.address);

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await marketplace.methods.makeOffer(this.state.description).send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, 'ether')
      });

      Router.pushRoute(`/products/${this.props.address}/offers`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false, value: '', description: '' });
  };

  render() {
    return (
      <Layout>

        <Link route={`/products/${this.props.address}/offers`}>
          <a>
            <Button secondary floated="right">Back</Button>
          </a>
        </Link>
        <h3>Create a New Offer</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Insert Offer Amount</label>
            <Input
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
              label="ether"
              labelPosition="right"
            />
            <label>Description of your offer</label>
            <Input
              value={this.state.description}
              onChange={event => this.setState({ description: event.target.value })}
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button secondary loading={this.state.loading}>
            Make Offer
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default OfferNew;
