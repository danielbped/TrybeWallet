import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectCurrency extends Component {
  render() {
    const { name, value, onChange, title, options } = this.props;
    return (
      <label htmlFor={ name }>
        {title}
        <select name={ name } id={ name } value={ value } onChange={ onChange }>
          {Object.values(options).filter((option) => option.codein !== 'BRLT')
            .map((option) => <option key={ option.code }>{option.code}</option>)}
        </select>
      </label>
    );
  }
}

SelectCurrency.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectCurrency;
