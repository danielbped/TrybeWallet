import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import WalletHeader from '../components/WalletHeader';
import WalletTable from '../components/WalletTable';

class Wallet extends React.Component {
  render() {
    const { expensesFromState } = this.props;
    const total = expensesFromState.map((expense) => {
      const { value, currency, exchangeRates } = expense;
      const currentCurrency = Object.values(exchangeRates).find(
        (rate) => rate.code === currency,
      ).ask;
      return value * currentCurrency;
    }).reduce((acc, curr) => acc + curr, 0);
    return (
      <main>
        <Header total={ total } />
        <WalletHeader />
        <WalletTable />
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  expensesFromState: state.wallet.expenses,
});

Wallet.propTypes = {
  expensesFromState: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(Wallet);
