import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


const ContainerGaleria = ({title}) => {
  return (
    <div className="contenedor_galeria container">
      <div className="col-4">
        {title}
      </div>
      <div className="col-8">
        <button className="btn btn-primary" type="button">Prueba</button>
      </div>
    </div>
  );
};

ContainerGaleria.defaultProps = {
  title:'Default title'
}

ContainerGaleria.propTypes = {
  title:PropTypes.string,
};




export default ContainerGaleria;
