import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Header, Icon, Form, Input, Button, TextArea } from 'semantic-ui-react';

class ContactUs extends Component {
  render() {
    return (
      <Layout>
        <Header as='h1'>
          <Icon name='plug' />
          <Header.Content>Contact us</Header.Content>
        </Header>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input
              error='Please enter your first name'
              label='First name'
              placeholder='First name'
            />
            <Form.Input
              error='Please enter your last name'
              label='Last name'
              placeholder='Last name'
            />
          </Form.Group>
          <Form.Field
            control={TextArea}
            label='Message'
            placeholder='Message'
          />
          <Form.Checkbox
            label='I agree to the Terms and Conditions'
            error={{
              content: 'You must agree to the terms and conditions',
              pointing: 'left'
            }}
          />
          <Form.Field
            control={Input}
            label='Email'
            placeholder='filmchain@filmchain.co'
            error={{
              content: 'Please enter a valid email address',
              pointing: 'below',
            }}
          />
          <Button secondary>
            send
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default ContactUs;
