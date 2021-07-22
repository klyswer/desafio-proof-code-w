import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import CardGaleria from '../../atomos/cardGalery/CardGaleria';
import './style.css';
import { agregarDescuentoAcumuladoAction, agregarProductoAction, verCarritoAction } from '../carrito/CarritoAction';


const Galeria = ({listaProductos=[]}) => {

  const dispatch = useDispatch();
  const {listaProductoSelects, marcaSeleccionada} = useSelector((store)=> store.carrito);

  // Actions
  const verCarrito = ()=>dispatch(verCarritoAction(true));
  const agregarProducto = (elm)=>dispatch(agregarProductoAction(elm));
  const agregarDescuentoAcumulado = (elm)=>dispatch(agregarDescuentoAcumuladoAction(elm));

  const calculaMonto = (marcaSelect,listaSeleccionados)=>{
    const {brand:marca,threshold,discount}=marcaSelect[0];
    const acumulado = listaSeleccionados.filter(item=>marca===item.brand).reduce((accumulator, iterador) => accumulator + iterador.price,0);
    
    if(acumulado>=threshold){
      return {marca,acumulado,threshold,discount,promoAplica:true}
    }
    return {marca,acumulado,threshold,discount,promoAplica:false,faltante:(threshold-acumulado)}
  }

  useEffect(() => {
    if(marcaSeleccionada.length > 0){
      const sumatoriaPorMarca = calculaMonto(marcaSeleccionada,listaProductoSelects);
      agregarDescuentoAcumulado(sumatoriaPorMarca)
    }
  }, [listaProductoSelects]);

  const handleClick = (elm)=>{ 
    agregarProducto(elm);
    verCarrito();
  }

  return (
    listaProductos !== [] ? (
      <div className="row">
        {
          listaProductos.map((elm) => (
            <div key={elm._id} className="col-sm-6 col-md-4 col-lg-3 mt-4 card_galeria">
              <CardGaleria marca={elm.brand} id={elm._id} src={elm.image} descripcion={elm.description} precio={elm.price} agregarProducto={()=>handleClick(elm)} />
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
