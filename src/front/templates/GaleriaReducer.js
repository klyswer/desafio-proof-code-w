import initialState from "../../store/initialState";
import GaleriaTypes from './GaleriaTypes';

const GaleryReducer = (state = initialState.galeria, action) => {

  switch (action.type) {
    case GaleriaTypes.GET_ALL_PRODUCTS:
      return { 
        ...state, 
        list: action.payload 
      };
    default:
      return state;
  }
};

export default GaleryReducer;
