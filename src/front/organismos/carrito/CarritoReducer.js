import initialState from "../../../store/initialState";
import CarritoTypes from './CarritoTypes';

const CarritoReducer = (state = initialState.Cart, action) => {

  switch (action.type) {
    case CarritoTypes.GET_ALL_DISCOUNTS:
      return { 
        ...state,
        discount: action.payload 
      };
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
        listaProductoSelects: state.listaProductoSelects.filter( elm => elm._id !== action.payload)
      };   
    case CarritoTypes.SET_SUBTOTAL:
      return {
        ...state, 
        subTotal: state.listaProductoSelects.reduce((accumulator, elm) =>{
          return accumulator + elm.price;
        },0)
      };    
    case CarritoTypes.GET_DISCOUNTS:
      return {
        ...state, 
        listaDescuentos: state.discount.filter( elm => elm.brand === action.payload)
      };
    default:
      return state;
  }
};

export default CarritoReducer;