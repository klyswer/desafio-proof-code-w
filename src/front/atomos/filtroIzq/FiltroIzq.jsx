import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


const FiltroIzq = ({listaElm=[],title}) => {
  return (
    <div className="contenedor_filtro">
      <h5 className="filtro_galeria">{title}</h5>
      {
        listaElm.length >0 && (
          listaElm.map((item)=>(
            <div key={item.id}>
              {item.opcion}
              <span>{` ${item.value}`}</span>
            </div>
          ))
        )
      }
    </div>
  );
};


FiltroIzq.propTypes = {
  listaElm: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default FiltroIzq;
