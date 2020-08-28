import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Header, Icon, Segment, Image, Item, Card } from 'semantic-ui-react';

class Reviews extends Component {
  renderItems() {
    return (
      <Item.Group>
        <Item>
          <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
          <Item.Content>
            <Item.Header as='a'>
              Person 1
            </Item.Header>
            <Item.Description>
              Lorem
            </Item.Description>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
          <Item.Content>
            <Item.Header as='a'>
              Person 2
            </Item.Header>
            <Item.Description>
              Lorem
            </Item.Description>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
          <Item.Content>
            <Item.Header as='a'>
              Person 3
            </Item.Header>
            <Item.Description>
              Lorem
            </Item.Description>
          </Item.Content>
        </Item>

        <Item>
          <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
          <Item.Content>
            <Item.Header as='a'>
              Person 4
            </Item.Header>
            <Item.Description>
              Lorem
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    );
  }

  renderPeopleCards() {
    return (
      <Card.Group centered>
        <Card>
          <Card.Content>
            <Image
              floated='right'
              size='mini'
              src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
            />
            <Card.Header>
              Steve
            </Card.Header>
            <Card.Description>
              Making my life so easy to trade my rights for some money!
            </Card.Description>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <Image
              floated='right'
              size='mini'
              src='https://react.semantic-ui.com/images/avatar/large/molly.png'
            />
            <Card.Header>
              Molly
            </Card.Header>
            <Card.Description>
              Thanks! I just copped a new stakeholder
            </Card.Description>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <Image
              floated='right'
              size='mini'
              src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
            />
            <Card.Header>
              Jenny
            </Card.Header>
            <Card.Description>
              5/5 This is the best trading platform!
            </Card.Description>
          </Card.Content>
        </Card>

      </Card.Group>
    );
  }

  render() {
    return (
      <Layout>
      <div>
        <Header as='h2' icon textAlign='center'>
          <Icon name='users' circular />
          <Header.Content>Reviews</Header.Content>
        </Header>
      </div>
      <Segment.Group stacked>
        <Segment padded='very'>
          <Header>
            HERE'S WHAT PEOPLE SAYS ABOUT US!
            <Header.Subheader>
            These reviews are a perfect glance of what we do and how our live
            trading marketplace has changed the film industry! Please also share
            your love and support of our platform below.
            </Header.Subheader>
          </Header>

        </Segment>
        <Segment padded='very'>
          {this.renderItems()}
        </Segment>

        <Segment padded='very'>
          {this.renderPeopleCards()}
        </Segment>


      </Segment.Group>
      </Layout>
    );
  }
}

export default Reviews;
