import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Marketplace from '../ethereum/marketplace';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class OfferForm extends Component {
  state = {
    value: '',
    description: '',
    errorMessage: '',
    loading: false
  };

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

      Router.replaceRoute(`/products/${this.props.address}`)
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false, value: '', description: '' });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>You can also make an offer to this product</label>
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
    );
  }
}

export default OfferForm;
