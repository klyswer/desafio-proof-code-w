import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import ItemSelect from "../../atomos/itemSelect/ItemSelect";
import { eliminarProductoAction } from "./CarritoAction";
import { agregarformatoPesos } from "../../../utils/FormatUtil";
import "./style.css";

const Carrito = ({ productosSelect = [], handleCerrar, promocion, subTotal }) => {
  const dispatch = useDispatch();

  const handleRemover = (e)=>{
    const {name}=e.target;
    // alert(id)
    dispatch(eliminarProductoAction(name))
  }

  return (
    <div className="carrito_contenedor">
      <div className="btn_cerrar_container">
        <button className="btn_cerrar" type="button" onClick={handleCerrar}>X</button>
      </div>
      {productosSelect.length > 0 ? (
        <div className="productos_select_container scroll_set scrollBar_agnes">
          {productosSelect.map((elm) => (
            <div key={elm._id} className="producto_select">
              <ItemSelect id={elm._id} marca={elm.brand} src={elm.image} nombre={elm.description} cantidad={elm.cantidad} precio={elm.price} handleEliminar={handleRemover} />
            </div>
          ))}
        </div>
      ) : (
        <div className="vacio_select_container">
          <img src={`${process.env.PUBLIC_URL}/images/empty-cart.svg`} alt="carro vacío" />
          <h6>Tu carrito está vacío</h6>
        </div>
      )}
      {
        promocion.length > 0 && (
          <div className="promocion_container">
            {`Agrega $${<strong>{promocion.faltante}</strong>} más en productos ${promocion.marca} y aprovecha un descuento total de $${<strong>{promocion.descuento}</strong>} en tu compra!`}
          </div>
        )
      }
      {
        !!subTotal && (
          <div className="sub_total_container">
            <div className="Sub_total_title">
              {'Subtotal de productos'}
            </div>
            <div className="sub_total_value">
              {agregarformatoPesos(subTotal)}
            </div>
          </div>
        )
      }
      {
        !!subTotal && (
          <div className="total_container">
            <div className="total_title">
              <strong>Total a pagar</strong>
            </div>
            <div className="total_value">
              <strong>{agregarformatoPesos(subTotal)}</strong>
            </div>
          </div>
        )
      }

    </div>
  );
};

Carrito.defaultProps = {
  promocion:[],
  subTotal:0,
  // marca:''
}

Carrito.propTypes = {
  productosSelect: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleCerrar: PropTypes.func.isRequired,
  promocion: PropTypes.arrayOf(PropTypes.object),
  subTotal: PropTypes.number,
};

export default Carrito;
