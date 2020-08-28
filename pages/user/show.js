import React, { Component } from 'react';
import Layout from '../../components/Layout';
import newproduct from '../../ethereum/newproduct';
import web3 from '../../ethereum/web3';
import { Card, Header, Dropdown, Menu, Label, Grid, Segment, Item } from 'semantic-ui-react';
import { Link } from '../../routes';

class UserShow extends Component {
  state = {
      activeItem: 'profile'
  };


  static async getInitialProps(props) {


    const accounts = await web3.eth.getAccounts();
    console.log(accounts);

    const userInfo = await newproduct.methods.getUser(accounts[0]).call();
    console.log(userInfo);

      return {
          address: props.query.address,
          accounts: accounts[0],
          userId: userInfo[0],
          email: userInfo[1],
          firstname: userInfo[2],
          lastname: userInfo[3],
          stakeholders: userInfo[4]
      }
  }

  render

  renderStakeholders() {
    const items = this.props.userStakeholders.map(address => {
      return {
        header: address,
        fluid: true
      }
    });

    return <Card.Group items={items} />;
  }

  renderLeftMenu() {
    const { activeItem } = this.state;
    return (
      <Grid>
        <Grid.Column width={4}>
          <Menu vertical >
            <Menu.Item
              name='Profile'
              active={activeItem === 'profile'}
              onClick={this.handleItemClick}
            />

            <Menu.Item
              name='Setting'
              active={activeItem === 'profile'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            <Header as='h1'>Account Information</Header>
            <hr />
            {this.renderInfoCards()}
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }

  renderInfoCards() {
    return (
      <Segment.Group>
        <Segment>
          <Header>
            Firstname
          </Header>
          {this.props.firstname}
        </Segment>

        <Segment>
          <Header>
            Lastname
          </Header>
          {this.props.lastname}
        </Segment>

        <Segment>
          <Header>
            Email
          </Header>
          {this.props.email}
        </Segment>

        <Segment>
          <Header>
            Your stakes
          </Header>
          {this.renderStakeholdersCard()}
        </Segment>
      </Segment.Group>

    );
  }

  renderStakeholdersCard() {
    const items = this.props.stakeholders.map(address => {
      return {
        header: 'Stakeholder',
        meta: address,
        description: (
          <Link route={`/user/${address}/view-info`}>
            <a>View Info</a>
          </Link>
        ),
        fluid: true
      }
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>

        <Header>Personal Information</Header>
        {this.renderLeftMenu()}

      </Layout>
    );
  }
}

export default UserShow;
