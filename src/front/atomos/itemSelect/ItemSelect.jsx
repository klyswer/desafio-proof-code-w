import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ItemSelect = ({id,src,nombre,cantidad,precio,handleEliminar}) => {
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
        <button type="button" name={id} onClick={handleEliminar}>Eliminar</button>
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
  id:PropTypes.number.isRequired,
  src:PropTypes.string,
  nombre:PropTypes.string,
  cantidad:PropTypes.number,
  precio:PropTypes.number,
  handleEliminar: PropTypes.func.isRequired
};

export default ItemSelect;