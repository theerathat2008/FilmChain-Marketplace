import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import { Route } from '../../routes';

class NewTranche extends Component {
  state = {
    trancheDisplayName: '',
    tranchePosition: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await newproduct.methods
        .newProduct(this.state.description, this.state.listedPrice,
          this.state.amountToRecoup, this.state.fixedAmountAlreadyRecouped)
        .send({
          from: accounts[0]
      });

      Router.pushRoute('/');
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });

  };

  render() {
    return (
      <Layout>
      <h3>Create a Tranche</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>

          <Form.Field>
            <label>Tranche Display Name</label>
            <Input
              placeholder='Tranche Display Name'
              value={this.state.trancheDisplayName}
              onChange={event => this.setState({ trancheDisplayName: event.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Tranche Position</label>
            <Input
              placeholder='Tranche Position'
              value={this.state.tranchePosition}
              onChange={event => this.setState({ tranchePosition: event.target.value })}
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} secondary>
            Create
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default NewTranche;
