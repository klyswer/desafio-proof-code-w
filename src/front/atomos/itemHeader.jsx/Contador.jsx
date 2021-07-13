import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Contador = ({number}) => {
  return (
    <div className="cantidad_productos">
      {number}
    </div>
  );
}

Contador.defaultProps = {
  number:'0',
}

Contador.propTypes = {
  number:PropTypes.number
};

export default Contador;
