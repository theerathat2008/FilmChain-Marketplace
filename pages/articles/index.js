import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Header, Button, Segment } from 'semantic-ui-react';
import OtherArticlesLink from '../../components/OtherArticlesLink';
import { Link } from '../../routes';

class ArticlesIndex extends Component {



  render() {
    return (
      <Layout>
        <Header as='h1'>
          What can we help you?
        </Header>
        <div>
          <Segment.Group stacked>
            <Segment padded='very'>

              <a href="https://filmchain.co" target="_blank">
                <Header>What is FilmChain?</Header>
              </a>

            </Segment>
            <Segment padded='very'>
              <Link route={`/articles/more-on-buying`}>
                <a>
                  <Header>What is an Offer and How to Buy?</Header>
                </a>
              </Link>
            </Segment>
            <Segment padded='very'>
              <Link route={`/articles/more-on-selling`}>
                <a>
                  <Header>How to List a Product for Sales?</Header>
                </a>
              </Link>
            </Segment>
            <Segment padded='very'>
              <Link route={`/articles/selling-fee`}>
                <a>
                  <Header>What is a Selling Fee?</Header>
                </a>
              </Link>
            </Segment>
            <Segment padded='very'>
              <Link route={`/articles/buying-fee`}>
                <a>
                  <Header>What is a Buying Fee?</Header>
                </a>
              </Link>
            </Segment>
          </Segment.Group>
          <Link route="/contact-us">
            <Button primary>
              Contact Us
            </Button>
          </Link>
        </div>



      </Layout>
    );
  }
}

export default ArticlesIndex;
