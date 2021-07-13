
import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons'
import BarraBusqueda from "../../atomos/barraBusqueda/BarraBusqueda";
// import { filtrarBarraAction, renudarListSelectAction } from "../galery/GaleryAction";
import ItemHeader from "../../atomos/itemHeader.jsx/ItemHeader";
import './Header.css';

const Header = ({realizarBusqueda,reanudarLista,isFetchLista=[]}) => {
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
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarText">
            <ItemHeader title=' Categorías' cssBtn='bg_dark p_14' icono={<FontAwesomeIcon icon={faBars} />} /> 
            <BarraBusqueda habilitado={isFetchLista.length > 0} isMobile={false} actionFilter={realizarBusqueda} restaurarLista={reanudarLista} />       
            <ItemHeader title=' Supermercado' cssCont="me-2" cssBtn='bg_greensy p_14' icono={<FontAwesomeIcon icon={faShoppingCart} />} />
            <ItemHeader tipoCart cssBtn='bg_dark' /> 
          </div>
        </div>
      </nav>
    </>
  );
}

// const mapStateToProps = state =>({
//   isFetchLista: state.galery.listRoot, 
// });

// const mapDispatchToProps = (dispatch)=> ({
//   realizarBusqueda: (estado) => dispatch(filtrarBarraAction(estado)),
//   reanudarLista: () => dispatch(renudarListSelectAction()),
// })

export default connect(null, null)(Header);
