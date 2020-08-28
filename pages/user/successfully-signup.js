import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Button } from 'semantic-ui-react';

class SuccessfullySignup extends Component {
  render() {
    return (
      <Header>Registration Successful!</Header>

      <Button>Log in</Button>
    );
  }
}
