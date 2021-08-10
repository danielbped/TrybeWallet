import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { total = 0, email } = this.props;
    const cambio = 'BRL';
    return (
      <header className="header">
        <h1>TrybeWallet</h1>
        <div className="user-info">
          <p data-testid="email-field" className="user-email">
            {`E-mail: ${email}`}
          </p>
          <div className="user-expense">
            <span data-testid="total-field">
              {`Despesa Total: ${total.toFixed(2)} `}
            </span>
            <span data-testid="header-currency-field">
              {cambio}
            </span>
          </div>
        </div>
        <Link className="logout" to="/">
          <span>Sair</span>
        </Link>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);
