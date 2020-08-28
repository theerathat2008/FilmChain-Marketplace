import React, { Component } from 'react';
import { Card, Button, Segment, Header, Search, Grid } from 'semantic-ui-react';
import newproduct from '../ethereum/newproduct';
import Layout from '../components/Layout';
import { Link } from '../routes';
import Marketplace from '../ethereum/marketplace';

class MarketplaceIndex extends Component {
  static async getInitialProps() {
    const products = await newproduct.methods.getDeployedProducts().call();

    return {
      products: products
    };
  }

  renderBigSearch() {
    return (
      <Segment placeholder>
        <Header as='h1' textAlign='center'>
          Start Trading Your Projects
        </Header>
        <Grid>
          <Grid.Column width={6}>
          </Grid.Column>

          <Grid.Column width={7}>
            <Search placeholder='Search...' floated='center'/>
          </Grid.Column>

        </Grid>
      </Segment>
    );
  }


  async renderInfo(x) {
    const marketplace = Marketplace(x);
    const productInformation = await marketplace.methods.getProductInfo.call();
    return productInformation;
  }

  renderProducts() {
    const items = this.props.products.map((address) =>  {
      /*const marketplace = Marketplace(address);

      const productInfo = await marketplace.methods.getProductInfo().call();
      const description = productInfo[2];

      console.log(description);*/

      return {

        header: address,
        description: (
          <Link route={`/products/${address}`}>
            <a>View Stake</a>
          </Link>
        ),
        meta: 'Movie Stakeholder Address',
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }

  renderProducts2() {
    const items = this.props.products.map(async(address) =>  {
      /*const marketplace = Marketplace(address);

      const productInfo = await marketplace.methods.getProductInfo().call();
      const description = productInfo[2];

      console.log(description);*/
      const productInformation = await this.renderInfo(address);
      console.log(productInformation);

      return {

        header: address,
        description: (
          <Link route={`/products/${address}`}>
            <a>View Stakeholder</a>
          </Link>
        ),
        meta: productInformation[1],
        fluid: true
      };
    });
    return items;
  }

  render() {

    return (
      <Layout>

        {this.renderBigSearch()}
        <div>
          <h3>List of Available Stakes</h3>

          <Link route="/products/new">
            <a>
              <Button floated="right"
                content="Create New Project"
                icon="add circle"
                secondary
              />
            </a>
          </Link>
          {this.renderProducts()}

        </div>
      </Layout>
    );
  }
}

export default MarketplaceIndex;
