import React from 'react';
import PropTypes from 'prop-types';
import Contador from './Contador';
import './style.css';

const ItemHeader = ({icono,title,action,cssCont,cssBtn,tipoCart,handleClickCart}) => {
  return (
    <div className={`nav-item ${cssCont!==''?cssCont:''}`}>
      <button type="button" className={`nav-link default_btn_header ${cssBtn!==''?cssBtn:''}`} onClick={action}>
        {
          tipoCart === false ?(
            <div className="contenido_btn">
              <span>{icono}</span> 
              {title}
            </div>
          ):(
            <button type="button" className="d-flex justify-content-center aling-items-center btn_transparent" onClick={handleClickCart}>            
              <img height="25px" className="d-inline-block align-top" src={`${process.env.PUBLIC_URL}/images/lider-cart.svg`} alt="Lider-icon" />
              <Contador number={10} />
            </button>
          )
        }
      </button>
    </div>         
  );
};


ItemHeader.defaultProps = {
  icono:null,
  title:'',
  action:()=>null,
  cssCont:'',
  cssBtn:'',
  tipoCart:false,
  handleClickCart:()=>null,
}

ItemHeader.propTypes = {
  icono:PropTypes.element,
  title:PropTypes.string,
  action:PropTypes.func,
  cssCont:PropTypes.string,
  cssBtn:PropTypes.string,
  tipoCart:PropTypes.bool,
  handleClickCart:PropTypes.func
};


export default ItemHeader;
