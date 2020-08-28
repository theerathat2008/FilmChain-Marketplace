import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Input, Button, Icon } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import newproduct from '../../ethereum/newproduct';
import { Router } from '../../routes';

class Signup extends Component {
  state = {
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await newproduct.methods
        .createUser(this.state.email, this.state.firstname, this.state.lastname, this.state.password)
        .send({
          from: accounts[0]
      });

      Router.pushRoute('/user/login');
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });

  };

  render() {
    return (
      <Layout>

        <h3>Create an Account</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>First Name</label>
            <Input
              placeholder='First Name'
              value={this.state.firstname}
              onChange={event => this.setState({ firstname: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <Input
              placeholder='Last Name'
              value={this.state.lastname}
              onChange={event => this.setState({ lastname: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <Input
              placeholder='Email'
              value={this.state.email}
              onChange={event => this.setState({ email: event.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Password</label>
            <Input
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              value={this.state.password}
              onChange={event => this.setState({ password: event.target.value })}
            />
          </Form.Field>

          <Button loading={this.state.loading} secondary>
            Sign Up
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default Signup;
