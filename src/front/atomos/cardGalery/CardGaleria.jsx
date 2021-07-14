import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const CardGaleria = ({src,descripcion,precio,id,marca}) => {
  return (
    <div cat={marca}>
      <div id={id} className="card h-100">

        <img src={src!==''&& `https://${src}`} className="card-img-top tamaño_imagenes" alt={descripcion} />

        <div className="card-body pe-1 line_head">
          <h6 className="card-title card_title">{descripcion}</h6>
          <p className="card-text caja_texto_cards text-center">
            {descripcion}
          </p>
          {/* Modal */}
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-center align-items-center">
            <div className="circle_item active_item" />
            <span className="precio_color">{`$${Math.round(precio*1.19)}`}</span>
          </div>
        </div>
      </div>
    </div> 
  );
};


CardGaleria.propTypes = {
  src:PropTypes.string.isRequired,
  descripcion:PropTypes.string.isRequired,
  precio:PropTypes.number.isRequired,
  id:PropTypes.number.isRequired,
  marca:PropTypes.string.isRequired,
};


export default CardGaleria;