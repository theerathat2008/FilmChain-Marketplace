import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <div>
      <Segment vertical>

        <a href="https://filmchain.co" target="_blank">
          What is FilmChain?
        </a>

      </Segment>
      <Segment vertical>
        <Link route={`/articles/more-on-buying`}>
          What is an Offer and How to Buy?
        </Link>
      </Segment>
      <Segment vertical>
        <Link route={`/articles/more-on-selling`}>
          How to List a Product for Sales?
        </Link>
      </Segment>
      <Segment vertical>
        <Link route={`/articles/selling-fee`}>
          What is a Selling Fee?
        </Link>
      </Segment>
      <Segment vertical>
        <Link route={`/articles/buying-fee`}>
          What is a Buying Fee?
        </Link>
      </Segment>
    </div>
  );
};
