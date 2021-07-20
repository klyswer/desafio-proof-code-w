import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import Galeria from "../organismos/galeria/Galeria";
import { getAllProductsAction } from "./GaleriaAction";
import { getAllDiscountsAction } from "../organismos/carrito/CarritoAction";
import Cargando from '../atomos/spinner/Cargando';
import FiltroIzq from "../atomos/filtroIzq/FiltroIzq";
import "./style.css";

const lista=[
  {
    "id": '1krp',
    "opcion": "Marca1",
    "value":"Datos"
  },
  {
    "id": '2kyp',
    "opcion": "Marca1",
    "value":"Datos"
  },
  {
    "id": '3k45',
    "opcion": "Marca1",
    "value":"Datos"
  },
  {
    "id": '4kgf',
    "opcion": "Marca2",
    "value":"Datos"
  }
];

const lista2=[
  {
    "id": '1krp',
    "opcion": "Marca1",
    "value":"Datos"
  },
  {
    "id": '2kyp',
    "opcion": "Marca1",
    "value":"Datos"
  },
  {
    "id": '3k45',
    "opcion": "Marca1",
    "value":"Datos"
  },
  {
    "id": '4kgf',
    "opcion": "Marca2",
    "value":"Datos"
  },
  {
    "id": '5kdf',
    "opcion": "Marca3",
    "value":"Datos"
  },
  {
    "id": '6kdf',
    "opcion": "Marca4",
    "value":"Datos"
  }
];

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
          <div className="row mt-4 pad_left_12">
            <FiltroIzq listaElm={lista} title={title} />
            <FiltroIzq listaElm={lista2} title="Filtro por marca" />
          </div>
        </div>
        <div className="col-9 galeria_items">
          {
            list.length > 0 ? (
              <Galeria listaProductos={list} />
            ) : (
              <div className="row mt-4">
                <Cargando mensaje='Buscando productos...' girando />
              </div>
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
