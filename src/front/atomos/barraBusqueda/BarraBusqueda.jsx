import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import './BarraBusqueda.css';

const BarraBusqueda = ({
  // actionFilter, restaurarLista,
   isMobile, habilitado}) => {

  // const handleWord=({value})=>{
  //   if(!!value&& value!=="" && value.length > 1){
  //     actionFilter(value.toUpperCase());
  //   }else{
  //     restaurarLista();
  //   }
  // }

  return (
    <>
      <div className={`${!isMobile ? `w_barra` : `w_barra_mobile`} mx-auto inputWithIcon`}>
        <input disabled={!habilitado} className="input_barra" type="text" placeholder="¿Que estas buscando?"  />
        {
          habilitado ? (
            <i><FontAwesomeIcon className="iconoInput" icon={faSearch} /></i>
          ) : (
            <i className="w_spinner"><div className="spinner-border text-light" role="status" /></i>
          )
        }
        
      </div>
    </>
  )
}

export default BarraBusqueda;
