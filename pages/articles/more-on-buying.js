import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Header, Icon, Segment, Grid } from 'semantic-ui-react';
import OtherArticlesLink from '../../components/OtherArticlesLink';

class MoreOnBuying extends Component {
  renderHeader() {
    return (
      <div>
        <Header as='h2' icon textAlign='center'>
          <Icon name='users' circular />
          <Header.Content>What is an Offer and How to Buy</Header.Content>
        </Header>
      </div>
    );
  }
  renderBlogPost() {
    return (

      <div>
        <Header as='h2' attached='top'>
          Buying a Project
        </Header>
        <Segment attached>
          <p>
            There are 2 ways to buy on this trade marketplace where you can
            either make an offer to the seller or immediately purchase by hitting
             the Buy Now button.
          </p>
          <br />
          <p>
            Making an offer will show your interest on the listed project and
            an intention to buy at a certain price. All the offers will be listed
            from highest to lowest on the Offers page. You can also cancel or
            update your offer before your offer has been accpeted by the seller.
            Only the highest bid will contain the approve button which it allows
            the seller to approve the highest offer. After a deal has been made,
            all previous offers funds will be released to the beneficiary accounts
            but the owner of the account would have to hit Withdraw Funds Button
            to collect their money back.
          </p>

          <p>
            A deal will be made once the transaction has been accepted by either
            the buyer hit Buy Now button or the offer is accepted by the seller.
            If you don't want to risk the offers, just simply hit Buy Now Button
            to purchase the project immediately to ensure that you will be the next
            rights owner. The only accepted payment method is in ether.
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

export default MoreOnBuying;
