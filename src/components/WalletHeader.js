import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import SelectCurrency from './SelectCurrency';
import Select from './Select';
import Button from './Button';
import { fetchAPI, addExpenseToStore } from '../actions';

class WalletHeader extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      exchangeRates: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.newExpense = this.newExpense.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    const { getCurrency } = this.props;
    getCurrency();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  updateState() {
    this.setState((prevState) => ({
      ...prevState,
      id: prevState.id + 1,
    }));
  }

  newExpense(currencies) {
    const { getCurrency } = this.props;
    getCurrency();
    this.updateState();
    return {
      ...this.state,
      exchangeRates: { ...currencies },
    };
  }

  render() {
    const methodOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { currencies = [], addExpense } = this.props;
    const { value, description, tag, method, currency } = this.state;
    return (
      <div className="wallet-header">
        <Input
          title="Valor"
          name="value"
          value={ value }
          placeholder="Insira o Valor"
          onChange={ this.handleChange }
        />
        <Input
          title="Descrição"
          name="description"
          value={ description }
          placeholder="Insira a Descrição"
          onChange={ this.handleChange }
        />
        <Select
          title="Método de pagamento"
          name="method"
          value={ method }
          options={ methodOptions }
          onChange={ this.handleChange }
        />
        <Select
          title="Tag"
          name="tag"
          value={ tag }
          options={ tagOptions }
          onChange={ this.handleChange }
        />
        <SelectCurrency
          title="Moeda"
          name="currency"
          value={ currency }
          options={ currencies }
          onChange={ this.handleChange }
        />
        <Button
          name="Adicionar Despesa"
          onClick={ () => addExpense(this.newExpense(currencies)) }
          className="btn-add"
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(fetchAPI()),
  addExpense: (expense) => dispatch(addExpenseToStore(expense)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletHeader.propTypes = {
  getCurrency: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(
    PropTypes.objectOf(
      PropTypes.string,
    ),
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletHeader);
