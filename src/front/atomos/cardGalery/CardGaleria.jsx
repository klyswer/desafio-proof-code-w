import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const CardGaleria = ({src,descripcion,precio,id,marca,agregarProducto}) => {
  return (
    <div cat={marca}>
      <div id={id} className="card card_mod h-100">

        <img src={src!==''&& `https://${src}`} className="card-img-top tamaño_imagenes" alt={descripcion} />

        <div className="card-body pe-1 line_head">
          <h6 className="card-title card_title">{descripcion}</h6>
          <p className="card-text caja_texto_cards text-center">
            {descripcion}
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <div className="circle_item active_item" />
            <span className="precio_color">{`$${precio}`}</span>
          </div>
        </div>
        <div className="card-footer card_foot_mod">
          <button type="button" onClick={agregarProducto}>Agregar</button>
        </div>
      </div>
    </div> 
  );
};


CardGaleria.propTypes = {
  src:PropTypes.string.isRequired,
  descripcion:PropTypes.string.isRequired,
  precio:PropTypes.number.isRequired,
  id:PropTypes.string.isRequired,
  marca:PropTypes.string.isRequired,
  agregarProducto: PropTypes.func.isRequired
};


export default CardGaleria;