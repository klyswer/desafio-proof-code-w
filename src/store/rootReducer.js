import { combineReducers } from 'redux';
import CarritoReducer from '../front/organismos/carrito/CarritoReducer';
import GaleryReducer from '../front/templates/GaleriaReducer';

const rootReducer = combineReducers({
  galeria: GaleryReducer,
  carrito: CarritoReducer
});

export default rootReducer;
