import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form } from 'semantic-ui-react';

class ListSale extends Component {
  state = {
    loading: false
  };
  render() {
    return (
      <Layout>
        <h3>Choose Your Stakeholder for Sales</h3>

        <Form.Field label='Your Stakeholder' control='select'>
          <option value='producer'>Stranger Things</option>
        </Form.Field>

        <Button loading={this.state.loading} secondary>
          Submit
        </Button>
      </Layout>
    );
  }
}

export default ListSale;
