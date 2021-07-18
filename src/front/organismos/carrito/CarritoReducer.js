import initialState from "../../../store/initialState";
import CarritoTypes from './CarritoTypes';

const CarritoReducer = (state = initialState.Cart, action) => {

  switch (action.type) {
    case CarritoTypes.SHOW_CART:
      return { 
        ...state, 
        showCart: action.payload 
      };
    case CarritoTypes.ADD_PRODUCT:
      return { 
        ...state,
        listaProductoSelects: state.listaProductoSelects.concat(action.payload)
      };
    case CarritoTypes.DECREASE_PRODUCT:
      return { 
        ...state, 
        listaProductoSelects: state.listaProductoSelects.filter( elm => elm.id !== parseInt(action.payload,10) ) 
      };
    default:
      return state;
  }
};

export default CarritoReducer;