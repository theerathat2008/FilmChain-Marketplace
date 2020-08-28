import React from 'react';
import { Menu, Dropdown, Input, Icon, Button, Header } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Menu style={{ marginTop: '10px' }}>
      <Link route="/">
        <a className="item">
          <Header>FilmChain Marketplace</Header>
        </a>
      </Link>
      <Menu.Item>
        <Input className="icon" icon="search" placeholder="Search..." />
      </Menu.Item>

      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">
            Home
          </a>
        </Link>

          <a href="https://www.imdb.com/news/movie" target="_blank" className="item" >
            News
          </a>


        <Dropdown item text='About'>
          <Dropdown.Menu>
            <Link route="/how-it-works">
              <a className="item">
                How it works?
              </a>
            </Link>
            <Link route="/reviews">
              <a className="item">
                Reviews
              </a>
            </Link>
            <Link route="/articles">
              <a className="item">
                FAQ
              </a>
            </Link>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown item text='Contact Us'>
          <Dropdown.Menu>
            <Dropdown.Item color="facebook">
              <Icon name="medium" />
              <a href="https://medium.com/@BigCouch" target="_blank">
              Medium
              </a>
            </Dropdown.Item>
            <Dropdown.Item color="twitter">
              <Icon name="twitter" />
              <a href="https://twitter.com/bigcouchfilms" target="_blank">Twitter</a>
            </Dropdown.Item>
            <Dropdown.Item color="mail">
              <Icon name="mail" />
              <Link route="/contact-us">
                E-mail
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown item text='Account'>
          <Dropdown.Menu>
            <Link route="/user/show">
              <a className="item">
                View Your Account
              </a>
            </Link>
            <Link route="/reviews">
              <a className="item">
                Settings
              </a>
            </Link>
            <Link route="/user/signup">
              <a className="item">
                Sign Up
              </a>
            </Link>
            <Link route="/user/login">
              <a className="item">
                Login
              </a>
            </Link>
            <Dropdown.Item>Logout</Dropdown.Item>

          </Dropdown.Menu>
        </Dropdown>

        <Link route="/products/new">
          <a className="item" color="red">
            Sell
          </a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
