import React, { Component } from 'react';
import CheckoutLayout from '../../../components/CheckoutLayout';
import { Segment, Button, Header, Icon, Grid } from 'semantic-ui-react';
import { Link } from '../../../routes';

class BuyTermConds extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;

    return { address };
  }


  render() {
    return (
      <CheckoutLayout>
        <Grid>
          <Grid.Column width={3}>
          </Grid.Column>


          <Grid.Column width={10} style={{ marginTop: '20px' }}>
            <Header as='h2'>
              <Icon name='settings' />
              <Header.Content>
                Summary of How it Works
              </Header.Content>
              <br />
              <Header.Subheader>
                For more details on
                <Link>
                  <a> Terms & Conditions</a>
                </Link>
              </Header.Subheader>
            </Header>
            <Segment.Group>
              <Segment padded='very'>
                Make and Offer or Buy Now to immediately purchased the project
              </Segment>
              <Segment padded='very'>
                Once offer is accepted, we will authorise the payment
              </Segment>
              <Segment padded='very'>
                The project ownership rights will be directly transfer to the beneficiary account
              </Segment>
            </Segment.Group>


              <Link route={`/products/${this.props.address}`} color="grey">
                <a>
                  <Button>
                    Cancel
                  </Button>
                </a>
              </Link>


              <Link route={`/products/${this.props.address}/checkout/buycheckout`}>
                <Button floated="right" color="green">
                  I understand
                </Button>
              </Link>

          </Grid.Column>

          <Grid.Column width={3}>
          </Grid.Column>
        </Grid>
      </CheckoutLayout>
    );
  }
}

export default BuyTermConds;
