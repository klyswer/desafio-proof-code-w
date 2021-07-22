import React from 'react';
import PropTypes from 'prop-types';
import { agregarformatoPesos } from '../../../utils/FormatUtil';


const ItemDescuento = ({discount,threshold,marca}) => {

  return (
    <> 
      <div className="promo_aplicada_container">
        <div className="promo_title">Descuento por marca</div>
        <div className="promo_title">{`-${agregarformatoPesos(discount)}`}</div>
      </div>
      <div className="promo_descript">
        <span>* Se aplicó un descuento de </span>
        <strong>{agregarformatoPesos(discount)}</strong> 
        <span> por haber comprado al menos </span>
        <strong>{agregarformatoPesos(threshold)}</strong>
        <span>{` en productos ${marca}!`}</span>
      </div>
    </>
  );
};


ItemDescuento.propTypes = {
  discount: PropTypes.number.isRequired,
  threshold:PropTypes.number.isRequired,
  marca:PropTypes.string.isRequired
};


export default ItemDescuento;