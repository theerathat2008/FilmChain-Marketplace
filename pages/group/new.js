import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import { Route } from '../../routes';

class NewGroup extends Component {
  state = {
      name: '',
      trancheId: '',
      trancheDisplayName: '',
      tranchePosition: '',
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

      Router.pushRoute(`/products/${this.props.address}/offers`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false, value: '', description: '' });
  };

  render() {
    return (
      <Layout>
      <h3>Create a Group</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Name</label>
            <Input
              placeholder='Name'
              value={this.state.name}
              onChange={event => this.setState({ name: event.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Tranche ID</label>
            <Input
              placeholder='Tranche ID'
              value={this.state.trancheId}
              onChange={event => this.setState({ trancheId: event.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Title</label>
            <Input
              placeholder='Title'
              value={this.state.title}
              onChange={event => this.setState({ title: event.target.value })}
            />
          </Form.Field>

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

export default NewGroup;
