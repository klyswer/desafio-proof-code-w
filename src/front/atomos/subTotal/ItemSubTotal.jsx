import React from 'react';
import PropTypes from 'prop-types';
import { agregarformatoPesos } from '../../../utils/FormatUtil';


const ItemSubTotal = ({subTotal}) => {

  return (
    <div className="sub_total_container">
      <div className="Sub_total_title">
        {'Subtotal de productos'}
      </div>
      <div className="sub_total_value">
        {agregarformatoPesos(subTotal)}
      </div>
    </div>
  );
};

ItemSubTotal.propTypes = {subTotal: PropTypes.number.isRequired};

export default ItemSubTotal;
