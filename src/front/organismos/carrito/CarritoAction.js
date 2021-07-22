import ProductService from '../../../api/ProductService';
import CarritoTypes from './CarritoTypes';

export const getAllDiscountsAction = () => {
  return async dispatch => {
    try {
      const responseDiscounts = await ProductService.getDiscounts();
      dispatch({ type: CarritoTypes.GET_ALL_DISCOUNTS, payload: responseDiscounts });
    } catch (error) {
      dispatch({ type: CarritoTypes.ERROR_GET_DISCOUNTS, payload: {} });
    }
  };
};

export const verCarritoAction = (state) =>{
  return dispatch => {
    dispatch({ type: CarritoTypes.SHOW_CART, payload:state });
  }
}

export const agregarProductoAction = (elm)=> {
  return dispatch => {
    dispatch({type: CarritoTypes.ADD_PRODUCT, payload: elm });
    dispatch({type: CarritoTypes.SET_SUBTOTAL }); // Action para calcular el subtotal.
    dispatch({type:CarritoTypes.GET_DISCOUNTS, payload: elm.brand});
  };
}

export const eliminarProductoAction = (elm)=> {
  return dispatch => {
    dispatch({type: CarritoTypes.DECREASE_PRODUCT, payload: elm._id });
    dispatch({type: CarritoTypes.SET_SUBTOTAL }); // Action para calcular el subtotal.
    dispatch({type:CarritoTypes.GET_DISCOUNTS, payload: elm.brand});
  };
}

export const agregarDescuentoAcumuladoAction = (elm)=> {
  return dispatch => {
    dispatch({type: CarritoTypes.ADD_DESCOUNT_ACUM, payload: elm });
  };
}