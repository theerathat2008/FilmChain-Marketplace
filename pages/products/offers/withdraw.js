import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import { Form, Input, Button, Header, Segment } from 'semantic-ui-react';
import { Link } from '../../../routes';

class OfferWithdraw extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;

    return { address };
  }
  render() {
    return (
      <Layout>
        <Link route={`/products/${this.props.address}/offers`}>
          <a>
            <Button secondary floated="right">Back</Button>
          </a>
        </Link>

        <h3>Withdraw Page</h3>
        <Form>
          <Form.Field>
            <label>Insert your address to check eligibility of withdrawal</label>
            <Input />

          </Form.Field>

          <Button secondary>Check</Button>
        </Form>
        <Button primary floated="right">Request a Withdrawal</Button>
        <br />
        <div>
          <Header as='h3' attached='top'>
            Terms & Conditions of Withdrawal
          </Header>
          <Segment attached>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
          </Segment>
        </div>
      </Layout>
    );
  }
}

export default OfferWithdraw;
