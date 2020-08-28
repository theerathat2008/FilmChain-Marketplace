import React, { Component } from 'react';
import { Form, Button, Input, Message, TextArea } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import newproduct from '../../ethereum/newproduct';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class ProductNew extends Component {
  state = {
    title: '',
    description: '',
    amountToRecoup: '',
    fixedAmountAlreadyRecouped: '',
    percentage: '',
    movieAddress: '',
    groupAddress: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await newproduct.methods
        .newProduct(this.state.title, this.state.description, this.state.amountToRecoup,
          this.state.fixedAmountAlreadyRecouped, this.state.percentage,
          this.state.movieAddress, this.state.groupAddress, this.state.value)
        .send({
          from: accounts[0]
      });

      Router.pushRoute('/');
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });

  };

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Layout>
        <h3>Create a Stakeholder</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Title of the Project</label>
          <Input
            value={this.state.title}
            onChange={event => this.setState({ title: event.target.value })}
          />
        </Form.Field>
          <Form.Field>
            <label>Description of the Project</label>
            <TextArea
              value={this.state.description}
              onChange={event => this.setState({ description: event.target.value })}
            />
          </Form.Field>

          <Form.Group inline>
            <label>Stakeholder Type</label>
            <Form.Radio
              label='Gross Percentage'
              value='0'
              checked={value === '0'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='Net Percentage'
              value='1'
              checked={value === '1'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='Capped Gross Percentage'
              value='2'
              checked={value === '2'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='Capped Net Percentage'
              value='3'
              checked={value === '3'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='Profit Participation'
              value='4'
              checked={value === '4'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='Expense'
              value='5'
              checked={value === '5'}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Field>
            <label>Amount to Recoup</label>
            <Input
              label="$"
              labelPosition="right"
              value={this.state.amountToRecoup}
              onChange={event =>
                this.setState({ amountToRecoup: event.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Amount Already Recouped</label>
            <Input
              label="$"
              labelPosition="right"
              value={this.state.fixedAmountAlreadyRecouped}
              onChange={event =>
                this.setState({ fixedAmountAlreadyRecouped: event.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Percentage</label>
            <Input
              label="%"
              labelPosition="right"
              value={this.state.percentage}
              onChange={event =>
                this.setState({ percentage: event.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Movie Address</label>
            <Input
              value={this.state.movieAddress}
              onChange={event =>
                this.setState({ movieAddress: event.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Group Address</label>
            <Input
              value={this.state.groupAddress}
              onChange={event =>
                this.setState({ groupAddress: event.target.value })}
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />

          <Button loading={this.state.loading} secondary>
            Create
           </Button>

        </Form>
      </Layout>
    );
  }
}

export default ProductNew;
