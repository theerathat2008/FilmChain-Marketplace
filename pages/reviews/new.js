import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Input, Button, Message } from 'semantic-ui-react';
import newproduct from '../../ethereum/newproduct';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';


class NewReview extends Component {
  state = {
    name: '',
    reviewMessage: '',
    errorMessage: '',
    loading: false
  }

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();

    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };


  render() {
    return (
      <Layout>
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
            <label>Please write us a review</label>
            <Input
              placeholder='Please write us a review'
              value={this.state.reviewMessage}
              onChange={event => this.setState({ reviewMessage: event.target.value })}
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />

          <Button loading={this.state.loading} secondary>
            Submit
          </Button>
        </Form>

      </Layout>
    );
  }
}

export default NewReview;
