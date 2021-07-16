import React from "react";
import PropTypes from "prop-types";
import ItemSelect from "../../atomos/itemSelect/ItemSelect";
import "./style.css";

const Carrito = ({ productosSelect = [], handleCerrar, promocion, marca }) => {
  return (
    <div className="carrito_contenedor">
      <div className="btn_cerrar_container">
        <button className="btn_cerrar" type="button" onClick={handleCerrar}>X</button>
      </div>
      {productosSelect !== [] ? (
        <div className="productos_select_container">
          {productosSelect.map((elm) => (
            <div key={elm.id} className="producto_select">
              <ItemSelect src={elm.image} nombre={elm.description} cantidad={elm.cantidad} precio={elm.price} />
            </div>
          ))}
        </div>
      ) : (
        <h5>. . .</h5>
      )}
      {
        promocion!==null && (
          <div className="promocion_container">
            {`Agrega $${promocion} más en productos ${marca}`}
          </div>
        )
      }
    </div>
  );
};

Carrito.defaultProps = {
  promocion: null,
  marca:''
}

Carrito.propTypes = {
  productosSelect: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleCerrar: PropTypes.func.isRequired,
  promocion: PropTypes.number,
  marca: PropTypes.string,
};

export default Carrito;
