import React, { Component } from 'react';

class TableHead extends Component {
  render() {
    const items = [
      'Descrição',
      'Tag',
      'Método de pagamento',
      'Valor',
      'Moeda',
      'Câmbio utilizado',
      'Valor convertido',
      'Moeda de conversão',
      'Editar/Excluir',
    ];
    return (
      <tr className="table-header">
        {items.map((th) => <th className="table-head" key={ th }>{ th }</th>)}
      </tr>
    );
  }
}

export default TableHead;
