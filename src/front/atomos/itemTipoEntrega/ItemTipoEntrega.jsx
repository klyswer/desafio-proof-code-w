import React from "react";
import PropTypes from "prop-types";
import './style.css';

const ItemTipoEntrega = ({tipo,texto}) => {
  return (
    <div className={`item_tipo_entrega ${tipo==='despacho'?'border_blue':'border_orange'}`}>
      <span className={`img_entrega ${tipo==='despacho'?'bg_img_blue':'bg_img_orange'}`}>
        <img
          src={tipo==='despacho'?`${process.env.PUBLIC_URL}/images/despacho-icon.svg`:`${process.env.PUBLIC_URL}/images/delivery-icon.svg`}
          alt="icon-delivery"
        />
      </span>
      <span className={`text_entrega ${tipo==='despacho'?'bg_img_blue':'bg_img_orange'}`}>{texto}</span>
    </div>
  );
};

ItemTipoEntrega.defaultProps = {
  tipo: 'despacho',
  texto: 'despacho',
}

ItemTipoEntrega.propTypes = {
  tipo: PropTypes.string,
  texto: PropTypes.string,
};

export default ItemTipoEntrega;
