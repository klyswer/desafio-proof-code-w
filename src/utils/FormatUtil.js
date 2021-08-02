

/**
*  Este método recibe una cadena numerica, retorna la 
*  cadena con formato de moneda local CLP.
*/
export const agregarformatoPesos = (numero) => {
  const formatter = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP"
  });
  return formatter.format(numero);
}

/**
 * Método que recibe una cadena  de caracteres "Descripción"
 * Devuelve el parrafo cortado según el número.
 */
export const reducirDescripcion = (descripcion) => {
  const separaCaracteres = descripcion.split("");
  const numeroCaracteres = separaCaracteres.length;
  if (numeroCaracteres > 25) {
    const resto = numeroCaracteres-25
    separaCaracteres.splice(25, resto, ".", ".",".");
  return separaCaracteres.toString().replace(/,/g, "");
  }
    return separaCaracteres.toString().replace(/,/g, "");  
};




    // const sumarPorMarca = (marca,listaSeleccionados)=>{
    //   const sacarTotalPorMarca = listaSeleccionados.reduce((acumulador, valorActual) => {
    //     const elementoYaExiste = acumulador.find(elemento => elemento.brand === valorActual.brand);
    //     if (elementoYaExiste) {
    //       return acumulador.map((elm) => {
    //         if (elm.brand === valorActual.brand) {
    //           return {
    //             ...elm,
    //             acumulado: elm.price + valorActual.price
    //           }
    //         }
    //         return elm;
    //       });
    //     } 
    //     return [...acumulador, valorActual];
    //   }, []);
    //   return sacarTotalPorMarca;
    // }
