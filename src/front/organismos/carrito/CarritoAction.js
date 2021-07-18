import CarritoTypes from './CarritoTypes';

export const verCarritoAction = (state) =>{
  return dispatch => {
    dispatch({ type: CarritoTypes.SHOW_CART, payload:state });
  }
}

export const agregarProductoAction = (elm)=> {
  return dispatch => {
    dispatch({type: CarritoTypes.ADD_PRODUCT, payload: elm });
  };
}

export const eliminarProductoAction = (id)=> {
  return dispatch => {
    dispatch({type: CarritoTypes.DECREASE_PRODUCT, payload: id });
  };
}