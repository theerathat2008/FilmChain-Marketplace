import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import newproduct from '../../ethereum/newproduct';
import { Link, Router } from '../../routes';

class Login extends Component {
  state = {
    userAddress: '',
    password: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async (event) => {
    event.preventDefault();

    console.log(this.state.userAddress);

    console.log(this.state.password);
    this.setState({ loading: true, errorMessage: '' });

    try {
      console.log('reach try');
      const accounts = await web3.eth.getAccounts();
      await newproduct.methods
        .login(this.state.userAddress, this.state.password)
        .send({
          from: accounts[0]
        });
      Router.pushRoute(`/user/${this.props.userAddress}/show`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlgin='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              Log-in to your account
            </Header>

            <Form size='large' onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
              <Segment stacked>
                <Form.Input
                  fluid icon='user'
                  iconPosition='left'
                  placeholder='User address'
                  value={this.state.userAddress}
                  onChange={event => this.setState({ userAddress: event.target.value })}
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  value={this.state.password}
                  onChange={event => this.setState({ password: event.target.value })}
                />

                <Message error header="Oops!" content={this.state.errorMessage} />

                <Button color='teal' fluid size='large' loading={this.state.loading}>
                  Login
                </Button>

              </Segment>
            </Form>
            <Segment>
              New to us?
                <Link route={`/user/signup`}>
                  <a>   Sign Up</a>
                </Link>
            </Segment>
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default Login;
