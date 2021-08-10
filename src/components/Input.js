import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      name,
      placeholder,
      onChange,
      dataTestid,
      type = 'text',
      title,
      className,
    } = this.props;
    return (
      <label htmlFor={ name }>
        {title}
        <input
          data-testid={ dataTestid }
          className={ className }
          type={ type }
          name={ name }
          id={ name }
          placeholder={ placeholder }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  dataTestid: PropTypes.string.isRequired,
};

export default Input;
