import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { name, value, onChange, title, options } = this.props;
    return (
      <label htmlFor={ name }>
        {title}
        <select name={ name } id={ name } value={ value } onChange={ onChange }>
          {options.map((option) => <option key={ option }>{option}</option>)}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
