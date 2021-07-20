import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import Galeria from "../organismos/galeria/Galeria";
import { getAllProductsAction } from "./GaleriaAction";
import { getAllDiscountsAction } from "../organismos/carrito/CarritoAction";
import Cargando from '../atomos/spinner/Cargando';
import "./style.css";


// const lista=[
//   {
//     "id": 1,
//     "brand": "Marca1",
//     "description": "Televisión 54''",
//     "image": "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
//     "price": 80000
//   },
//   {
//     "id": 2,
//     "brand": "Marca1",
//     "description": "Microondas 120W",
//     "image": "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
//     "price": 40000
//   },
//   {
//     "id": 3,
//     "brand": "Marca1",
//     "description": "Horno Gas Premium",
//     "image": "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
//     "price": 30000
//   },
//   {
//     "id": 4,
//     "brand": "Marca2",
//     "description": "Refrigerador",
//     "image": "www.lider.cl/catalogo/images/catalogo_no_photo.jpg",
//     "price": 20000
//   }
// ];


const ContainerGaleria = ({ title }) => {
  const dispatch = useDispatch();
  const {list} = useSelector((store)=> store.galeria);

  useEffect(() => {
    dispatch(getAllProductsAction());
    dispatch(getAllDiscountsAction())
  }, []);

  return (
    <div className="contenedor_galeria container-fluid bg_default">
      <div className="row">
        <div className="col-3 galeria_filter">
          <h5 className="filtro_galeria">{title}</h5>
        </div>
        <div className="col-9 galeria_items">
          {
            list.length > 0 ? (
              <Galeria listaProductos={list} />
            ) : (
              <Cargando mensaje='Buscando productos...' girando />
            )
          }
        </div>
      </div>
    </div>
  );
};

ContainerGaleria.defaultProps = {
  title: "Default title",
};

ContainerGaleria.propTypes = {
  title: PropTypes.string,
};

export default ContainerGaleria;
