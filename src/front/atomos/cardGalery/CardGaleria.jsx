import React from 'react';
import PropTypes from 'prop-types';
import {agregarformatoPesos} from '../../../utils/FormatUtil';
import './style.css';
import ItemTipoEntrega from '../itemTipoEntrega/ItemTipoEntrega';

const CardGaleria = ({src,descripcion,precio,id,marca,agregarProducto}) => {
  return (
    <div cat={marca}>
      <div id={id} className="card card_mod h-100">

        <img className="card-img-top tamaño_imagenes" src={src!==''&& `https://${src}`} alt={descripcion} />

        <div className=" pe-1 line_head">
          <div className="container_card_texto">
            <div className="caja_texto_cards">
              <strong>{`${marca} `}</strong> 
              <span className="">{descripcion}</span>
            </div>
          </div>

          <div className="precio_card">
            <span>{agregarformatoPesos(precio)}</span>
          </div>
          <div className="container_tipo_entrega">
            <ItemTipoEntrega />
            <ItemTipoEntrega tipo="retiro" texto="retiro" />
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