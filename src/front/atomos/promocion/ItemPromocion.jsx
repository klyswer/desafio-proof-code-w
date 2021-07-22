import React from 'react';
import PropTypes from 'prop-types';
import { agregarformatoPesos } from '../../../utils/FormatUtil';

const Promocion = ({datosPromocion}) => {
  const {marca,discount,faltante} = datosPromocion;
  return (
    <div className="promocion_container"> 
      <span>Agrega </span>
      <strong>{agregarformatoPesos(faltante)}</strong> 
      <span>{` más en productos ${marca} y aprovecha un descuento total de `}</span>
      <strong>{agregarformatoPesos(discount)}</strong>
      <span> en tu compra!</span>
    </div>
  );
};

Promocion.propTypes = {datosPromocion: PropTypes.objectOf(PropTypes.element).isRequired};

export default Promocion;
