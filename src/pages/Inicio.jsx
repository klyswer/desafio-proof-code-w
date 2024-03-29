import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Carrito from '../front/organismos/carrito/Carrito';
import { verCarritoAction } from '../front/organismos/carrito/CarritoAction';
import Categorias from '../front/organismos/categorias/Categorias';
import Header from '../front/organismos/header/Header';
import ContainerGaleria from '../front/templates/ContainerGaleria';


const Inicio = () => {
  const dispatch = useDispatch();
  const { listaCategorias,list } = useSelector((store)=> store.galeria);
  const { showCart, listaProductoSelects, subTotal, datosPromoDescuento } = useSelector((store)=> store.carrito);
  const verCarrito = ()=>dispatch(verCarritoAction(false));

  return (
    <>
      <Header isFetchLista={list} />
      {showCart && (<Carrito promocion={datosPromoDescuento} subTotal={subTotal} handleCerrar={verCarrito} productosSelect={listaProductoSelects} />)}
      <Categorias listaCategorias={listaCategorias} />
      <ContainerGaleria />
    </>
  );
};

export default Inicio;
