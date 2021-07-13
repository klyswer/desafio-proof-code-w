import GaleriaTypes from './GaleriaTypes';
import ProductService from '../../api/ProductService';

export const getAllProductsAction = () => {
  return async dispatch => {
    try {
      const responseProducts = await ProductService.getProducts();
      dispatch({ type: GaleriaTypes.GET_ALL_PRODUCTS, payload: responseProducts });
    } catch (error) {
      dispatch({ type: GaleriaTypes.ERROR_GET_PRODUCTS, payload: {} });
    }
  };
};

// export const filtrarProductsAction = (cat) =>{
//   return dispatch => {
//     dispatch({ type: GaleryTypes.FILTRAR_LISTA, cat });
//   };
// };

// export const filtrarProductsSubCatAction = (subCat) =>{
//   return dispatch => {
//     dispatch({ type: GaleryTypes.FILTRAR_LISTA_SUBCAT, subCat });
//   };
// };

// export const filtrarBarraAction = (title) =>{
//   return dispatch => {
//     dispatch({ type: GaleryTypes.FILTRAR_LISTA_BARRA, title });
//   }
// };

export const renudarListSelectAction = () =>{
  return dispatch => {
    dispatch({ type: 'restaurarlista' });
  }
};
