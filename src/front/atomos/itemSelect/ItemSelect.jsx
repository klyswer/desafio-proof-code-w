import React from 'react';
import PropTypes from 'prop-types';
import { agregarformatoPesos } from '../../../utils/FormatUtil';
import './style.css';

const ItemSelect = ({id,marca,src,nombre,cantidad,precio,handleEliminar}) => {
  return (
    <div className="item_default_select">
      <div className="contenedor_item_select">
        <div className="icon_product">
          <div className="walmart_cantidad_item">{cantidad}</div>
          <img src={src!==''&& `https://${src}`} alt={nombre} />
        </div>
        <div className="descript_product">
          <div className="">
            {nombre}  
          </div>       
          <div className="">
            {cantidad}
          </div>        
        </div>

        <div className="precio_product">
          <div>
            <strong>{agregarformatoPesos(precio)}</strong>
          </div>
          <button type="button" name={id} id={marca} onClick={handleEliminar}>Eliminar</button>
        </div>
        
      </div>
    </div>
  );
}

ItemSelect.defaultProps = {
  src:'',
  nombre:'',
  cantidad:1,
  precio:0,
  marca:''
}

ItemSelect.propTypes = {
  id:PropTypes.number.isRequired,
  src:PropTypes.string,
  nombre:PropTypes.string,
  cantidad:PropTypes.number,
  precio:PropTypes.number,
  handleEliminar: PropTypes.func.isRequired,
  marca: PropTypes.string,
};

export default ItemSelect;