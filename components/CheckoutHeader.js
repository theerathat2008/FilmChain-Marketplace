import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Menu size='huge' style={{ marginTop: '10px' }}>
      <Link route="/">
        <a className="item">
          FilmChain Marketplace
        </a>
      </Link>

      <Menu.Menu position='right'>
      <Link route="/">
        <a className="item">
          FAQ
        </a>
      </Link>
      </Menu.Menu>
    </Menu>
  );
};
