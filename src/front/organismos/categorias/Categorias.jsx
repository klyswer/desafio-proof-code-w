import React from 'react';
import PropTypes from 'prop-types';
import ItemCategoria from '../../atomos/itemCategoria/ItemCategoria';
import './style.css';

const Categorias = ({listaCategorias=[]}) => {
  return (
    listaCategorias !== [] ? (
      <div className="container_categorias">
        {
          listaCategorias.map((elm) => (
            <div key={elm.id} className="">
              <ItemCategoria svg={elm.icon} title={elm.title} active={elm.active} />
            </div>
            )
          )
        }
      </div>
    ) : (
      <h5>Cargando Categorias</h5>
    )
  );
};


Categorias.propTypes = {
  listaCategorias:PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default Categorias;