import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ItemCategoria = ({svg,title,active}) => {
  return (
    <div className={`item_default_categoria ${active && 'item_activo'}`}>
      <div className="icon_categoria">
        <img src={`${process.env.PUBLIC_URL}/images/${svg}`} alt={title} />
      </div>
      <div className="texto_categoria">
        {title}
      </div>
    </div>
  );
}

ItemCategoria.defaultProps = {
  active:false,
}

ItemCategoria.propTypes = {
  svg:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  active:PropTypes.bool
};

export default ItemCategoria;