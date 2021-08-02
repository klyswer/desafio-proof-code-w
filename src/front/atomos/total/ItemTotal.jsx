import React from 'react';
import PropTypes from 'prop-types';
import { agregarformatoPesos } from '../../../utils/FormatUtil';


const ItemTotal = ({promoAplica,subTotal,discount}) => {

  return (
    <div className="total_container">
      <div className="total_title">
        <strong>Total a pagar</strong>
      </div>
      <div className="total_value">
        <strong>{ promoAplica ?agregarformatoPesos(subTotal-discount):agregarformatoPesos(subTotal)}</strong>
      </div>
    </div>
  );
};

ItemTotal.defaultProps ={ discount:0 };

ItemTotal.propTypes = { 
  promoAplica: PropTypes.bool.isRequired,  
  subTotal: PropTypes.number.isRequired,
  discount: PropTypes.number,
};

export default ItemTotal;
