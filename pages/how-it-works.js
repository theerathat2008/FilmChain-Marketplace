import React, { Component } from 'react';
import { Grid, Image, Container, Card, Button, Header, Icon } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link } from '../routes';

class HowItWorks extends Component {
  renderTheBasics() {

    const items = [
      {
        header: 'TRANSPARENCY',
        description: 'Real-time market for buying and selling equities'
      },
      {
        header: 'LEGITIMACY',
        description: 'Always assure that the equity exists in our database before sales are final'
      },
      {
        header: 'SECURE',
        description: 'All transactions are made via blockchain'
      }
    ];

    return <Card.Group centered items={items} />;
  }

  renderBuyCards() {
    const items = [
      {
        header: 'BUY IT NOW / OFFER',
        description: 'Can immediately buy it now at the current listed price or make an offer that the seller can accept',
        fluid: true
      },
      {
        header: 'OFFER WILL BE SHOWN TO SELLER',
        description: 'After a offer is made, only the current highest offer will be displayed to the seller who can choose to accept it',
        fluid: true
      },
      {
        header: 'SUCCESSFULLY BUY NOW / OFFER ACCEPTED',
        description: 'The stakeholder will be automatically transfer to beneficiary that buy the stakeholder',
        fluid: true
      }
    ];


    return <Card.Group items={items} />;
  }

  renderSellCards() {
    const items = [
      {
        header: 'SELL / CREATE NEW PRODUCT',
        description: 'List your stakeholder equity for sales immediately',
        fluid: true
      },
      {
        header: 'ACCEPT HIGHEST OFFER',
        description: 'After you listed your stakeholder, you can always accept the highest offer that is made to your product',
        fluid: true
      },
      {
        header: 'RECEIVE FUNDS',
        description: 'When sales is made, you will autimatically receive your sales fund to your account',
        fluid: true
      }
    ];


    return <Card.Group items={items} />;
  }



  render() {
    return (
      <Layout>
        <Container>
          <Grid>
            <Grid.Column width={8}>
              <Image src='https://creamcoin.com/wp-content/uploads/2020/01/filmchain.jpg' />
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as='h1'>
                <Icon name='plug' />
                <Header.Content>THE STOCK MARKET FOR FILM EQUITIES</Header.Content>
              </Header>
              <h3>FilmChain manages end-to-end financial transactions for creative industries.</h3>
              <h4>FilmChain collects, allocates, and analyses revenues in film,
              TV and digital in a transparent and efficient way. Developing on Ethereum blockchain</h4>
            </Grid.Column>
          </Grid>
        </Container>

        <br />
        <hr />
        <br />
        <Container>

          <Header as='h1'>
            <Icon name='plug' />
            <Header.Content>THE BASICS</Header.Content>
          </Header>
            {this.renderTheBasics()}
        </Container>

        <br />
        <hr />
        <br />
        <Container>
          <Header as='h1'>
            <Icon name='plug' />
            <Header.Content>How to Buy?</Header.Content>
          </Header>
          {this.renderBuyCards()}
          <br />
          <Link route={`./articles/more-on-buying`}>
            <a>
              <Button color='teal' style={{ marginTop: '10px' }}>Learn More About Buying</Button>
            </a>
          </Link>
        </Container>
        <br />
        <hr />
        <br />
        <Container>
          <Header as='h1'>
            <Icon name='plug' />
            <Header.Content>How to Sell?</Header.Content>
          </Header>
          {this.renderSellCards()}

          <br />
          <Link route={`./articles/more-on-selling`}>
            <a>
              <Button color='teal' style={{ marginTop: '10px' }}>Learn More About Selling</Button>
            </a>
          </Link>
        </Container>
        <br />
        <hr />
        <br />
      </Layout>
    );
  }
}

export default HowItWorks;
