import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const {
      name,
      onClick,
      disabled,
      className,
    } = this.props;
    return (
      <button
        type="button"
        onClick={ onClick }
        disabled={ disabled }
        className={ className }
        data-testid={ className }
      >
        { name }
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Button;
