
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons'
import BarraBusqueda from "../../atomos/barraBusqueda/BarraBusqueda";
import ItemHeader from "../../atomos/itemHeader/ItemHeader";
import { verCarritoAction } from "../carrito/CarritoAction";
import './Header.css';


const Header = ({realizarBusqueda,reanudarLista,isFetchLista=[]}) => {
  const dispatch = useDispatch();
  const { showCart, listaProductoSelects } = useSelector((store)=> store.carrito);
  const verCarrito = ()=>dispatch(verCarritoAction(!showCart));

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg_pr position-fixed top-0 w-100 min_h58">
        <div className="container-fluid">
          
          <img
            src={`${process.env.PUBLIC_URL}/images/lider-logo.svg`}
            width="152"
            height="35"
            className="d-inline-block align-top"
            alt="Lider-icon"
          />

          <BarraBusqueda habilitado={isFetchLista.length > 0} isMobile actionFilter={realizarBusqueda} restaurarLista={reanudarLista} />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarText">
            <ItemHeader title=' Categorías' cssBtn='bg_dark p_14' icono={<FontAwesomeIcon icon={faBars} />} /> 
            <BarraBusqueda habilitado={isFetchLista.length > 0} isMobile={false} actionFilter={realizarBusqueda} restaurarLista={reanudarLista} />       
            <ItemHeader title=' Supermercado' cssCont="me-2" cssBtn='bg_greensy p_14' icono={<FontAwesomeIcon icon={faShoppingCart} />} />
            <ItemHeader numberItems={listaProductoSelects!==[]?listaProductoSelects.length:0} handleClickCart={verCarrito} tipoCart cssBtn='bg_dark' /> 
          </div>
        </div>
      </nav>
    </>
  );
}


export default Header;
