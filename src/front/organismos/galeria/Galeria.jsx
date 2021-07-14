import React from 'react';
import PropTypes from 'prop-types';
import CardGaleria from '../../atomos/cardGalery/CardGaleria';
import './style.css';

const Galeria = ({listaProductos=[]}) => {
  return (
    listaProductos !== [] ? (
      <div className="row">
        {
          listaProductos.map((elm) => (
            <div key={elm.id} className="col-sm-6 col-md-4 col-lg-3 mt-4">
              <CardGaleria marca={elm.brand} id={elm.id} src={elm.image} descripcion={elm.description} precio={elm.price} />
            </div>
            )
          )
        }
      </div>
    ) : (
      <h1>Cargando productos</h1>
    )
  );
};


Galeria.propTypes = {
  listaProductos:PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default Galeria;
