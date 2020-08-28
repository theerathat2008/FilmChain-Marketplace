import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Header, Icon, Segment, Grid } from 'semantic-ui-react';
import OtherArticlesLink from '../../components/OtherArticlesLink';

class MoreOnSelling extends Component {
  renderHeader() {
    return (
      <div>
        <Header as='h2' icon textAlign='center'>
          <Icon name='users' circular />
          <Header.Content>How to List a Project for Sales</Header.Content>
        </Header>
      </div>
    );
  }

  renderBlogPost() {
    return (
      <div>
        <Header as='h2' attached='top'>
          Listing your project
        </Header>
        <Segment attached>
          <p>
            You can create a new listed project for sales by clicking the Sell button or Create New Project
          </p>
          <p>
            Listing a project will show your interest to sell a specific project and
            an intention to sell at a certain price. One specific project listed is only
            designated an intention to sell one project where if you ar ewilling to sell
            multiple projects, you would have to create multiple listings for each project
          </p>
          <p>
            You can also accept the highest offer by routing to the View Offers page
            where all the offers will be listed from highest to lowest but you will
            be able to accept only the highes one. Once you accept an offer or a
            buyer Buy Now the project, the funds will be released to your account
            immediately.
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

export default MoreOnSelling;
