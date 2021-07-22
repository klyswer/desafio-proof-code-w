import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import ItemSelect from "../../atomos/itemSelect/ItemSelect";
import { eliminarProductoAction } from "./CarritoAction";
import ItemPromocion from "../../atomos/promocion/ItemPromocion";
import ItemDescuento from "../../atomos/descuento/ItemDescuento";
import ItemSubTotal from "../../atomos/subTotal/ItemSubTotal";
import ItemTotal from "../../atomos/total/ItemTotal";
import "./style.css";


const Carrito = ({ productosSelect = [], handleCerrar, promocion, subTotal }) => {
  const dispatch = useDispatch();
  const {marca,acumulado,threshold,discount,promoAplica} = promocion;
  
  const handleRemover = (elm)=>{
    dispatch(eliminarProductoAction(elm))
  }

  return (
    <div className="carrito_contenedor">
      <div className="btn_cerrar_container">
        <button className="btn_cerrar" type="button" onClick={handleCerrar}>X</button>
      </div>
      {/* ----------- Detalle productos seleccionados ----------- */}
      {productosSelect.length > 0 ? (
        <div className="productos_select_container scroll_set scrollBar_agnes">
          {productosSelect.map((elm) => (
            <div key={elm._id} className="producto_select">
              <ItemSelect id={elm._id} marca={elm.brand} src={elm.image} nombre={elm.description} cantidad={elm.cantidad} precio={elm.price} handleEliminar={()=>handleRemover(elm)} />
            </div>
          ))}
        </div>
      ) : (
        <div className="vacio_select_container">
          <img src={`${process.env.PUBLIC_URL}/images/empty-cart.svg`} alt="carro vacío" />
          <h6>Tu carrito está vacío</h6>
        </div>
      )}

      { (promocion !==[] && !promoAplica && acumulado > 0 ) && (<ItemPromocion datosPromocion={promocion} />) }

      { !!subTotal && (<ItemSubTotal subTotal={subTotal} />) }
      
      { promoAplica && (<ItemDescuento discount={discount} threshold={threshold} marca={marca} />) }

      {!!subTotal && (<ItemTotal promoAplica={promoAplica} subTotal={subTotal} discount={discount} />)}

    </div>
  );
};

Carrito.defaultProps = {
  promocion:[],
  subTotal:0,
}

Carrito.propTypes = {
  productosSelect: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleCerrar: PropTypes.func.isRequired,
  promocion: PropTypes.arrayOf(PropTypes.object),
  subTotal: PropTypes.number,
};

export default Carrito;
