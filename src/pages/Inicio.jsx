import React from 'react';
import { useSelector } from "react-redux";
import Categorias from '../front/organismos/categorias/Categorias';
import Header from '../front/organismos/header/Header';
import ContainerGaleria from '../front/templates/ContainerGaleria';


const Inicio = () => {

  const { listaCategorias } = useSelector((store)=> store.galeria);

  return (
    <>
      <Header />
      <Categorias listaCategorias={listaCategorias} />
      <ContainerGaleria />
    </>
  );
};

export default Inicio;
