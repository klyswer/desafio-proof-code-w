import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ItemSelect = ({src,nombre,cantidad,precio}) => {
  return (
    <div className="item_default_select">
      <div className="">
        <div className="icon_categoria">
          <img src={src!==''&& `https://${src}`} alt={nombre} />
        </div>
        <div className="">
          {nombre}
        </div>
        <div className="">
          {cantidad}
        </div>        
        <div className="">
          {precio}
        </div>
      </div>
    </div>
  );
}

ItemSelect.defaultProps = {
  src:'',
  nombre:'',
  cantidad:1,
  precio:0
}

ItemSelect.propTypes = {
  src:PropTypes.string,
  nombre:PropTypes.string,
  cantidad:PropTypes.number,
  precio:PropTypes.number
};

export default ItemSelect;