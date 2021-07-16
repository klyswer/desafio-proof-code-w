import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import CardGaleria from '../../atomos/cardGalery/CardGaleria';
import './style.css';
import { agregarProductoAction, verCarritoAction } from '../carrito/CarritoAction';


const Galeria = ({listaProductos=[]}) => {
  const dispatch = useDispatch();
  const verCarrito = ()=>dispatch(verCarritoAction(true));
  const agregarProducto = (elm)=>dispatch(agregarProductoAction(elm));

  const handleClick = (elm)=>{
    // console.log(elm);
    agregarProducto(elm)
    verCarrito()
  }

  return (
    listaProductos !== [] ? (
      <div className="row">
        {
          listaProductos.map((elm) => (
            <div key={parseInt(elm.id,10)*Math.random()} className="col-sm-6 col-md-4 col-lg-3 mt-4">
              <CardGaleria marca={elm.brand} id={elm.id} src={elm.image} descripcion={elm.description} precio={elm.price} agregarProducto={()=>handleClick(elm)} />
            </div>
            )
          )
        }
      </div>
    ) : (
      <h1>Cargando productos</h1>
    )
  );
};


Galeria.propTypes = {
  listaProductos:PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default Galeria;
