import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Header, Icon, Segment, Grid } from 'semantic-ui-react';
import OtherArticlesLink from '../../components/OtherArticlesLink';

class BuyingFee extends Component {
  renderHeader() {
    return (
      <div>
        <Header as='h2' icon textAlign='center'>
          <Icon name='users' circular />
          <Header.Content>What is a Buying Fee?</Header.Content>
        </Header>
      </div>
    );
  }

  renderBlogPost() {
    return (
      <div>
        <Segment attached>
          <p>
            When buying a project, there is a 2% processing fee which will
            be calculated at checkout depending on the price of the sales. The
            subtotal price will be the price that you would have to pay in total.
          </p>

        </Segment>
      </div>
    );
  }

  render() {
    return (
      <Layout>
        <Grid>
          <Grid.Column width={12}>
            {this.renderHeader()}
            {this.renderBlogPost()}
          </Grid.Column>

          <Grid.Column width={4}>
            <OtherArticlesLink />
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default BuyingFee;
