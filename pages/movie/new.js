import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import { Route } from '../../routes';

class NewMovie extends Component {
  state = {
    title: '',
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
        <h3>Create a Movie</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>

          <Form.Field>
            <label>Title</label>
            <Input
              placeholder='Title'
              value={this.state.title}
              onChange={event => this.setState({ title: event.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Description</label>
            <Input
              placeholder='Description'
              value={this.state.description}
              onChange={event => this.setState({ description: event.target.value })}
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

export default NewMovie;
