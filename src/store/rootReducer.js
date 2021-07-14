import { combineReducers } from 'redux';
import GaleryReducer from '../front/templates/GaleriaReducer';

const rootReducer = combineReducers({
  galeria: GaleryReducer,
});

export default rootReducer;
