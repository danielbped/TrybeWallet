import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import Button from '../components/Button';
import { login } from '../actions';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  isValid() {
    const { email, password } = this.state;
    const passwordLength = 6;
    const validPassword = password.length >= passwordLength;
    const validEmail = (/^[a-z0-9_]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/i).test(email);
    return (validEmail && validPassword);
  }

  render() {
    const { email, password } = this.state;
    const { loginSuccess } = this.props;
    return (
      <main className="main-login">
        <div className="login">
          <h1 className="login-title">TrybeWallet</h1>
          <Input
            dataTestid="email-input"
            className="email-input"
            name="email"
            type="text"
            placeholder="E-mail"
            value={ email }
            onChange={ this.handleChange }
          />
          <Input
            dataTestid="password-input"
            className="password-input"
            name="password"
            type="password"
            placeholder="Senha"
            value={ password }
            onChange={ this.handleChange }
          />
          <Link to="/carteira">
            <Button
              name="Entrar"
              className="login-button"
              disabled={ !this.isValid() }
              onClick={ () => loginSuccess(email) }
            />
          </Link>
        </div>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginSuccess: (email) => dispatch(login(email)),
});

Login.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
