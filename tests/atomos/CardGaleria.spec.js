import React from 'react';
/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import CardGaleria from '../../src/front/atomos/cardGalery/CardGaleria';
import { agregarformatoPesos } from '../../src/utils/FormatUtil';


describe('<CardGaleria />', () => {

  const img = 'aire.svg';
  const descript = "Producto Prueba";

  test('Primer SnapShot:<CardGaleria />', () => {
    const wrapper = shallow( <CardGaleria src={img} descripcion={descript} precio={1000} id="01k2021" marca="Marca01" />);
    expect(wrapper).toMatchSnapshot();
  });


  test('Caso prueba 1: props "src", debe renderizar el "string:ruta de src" recibido por props.', () => {
    const wrapper = shallow( <CardGaleria src={img} descripcion={descript} precio={1000} id="01k2021" marca="Marca01" />);
    const imgRender = wrapper.find('img').prop('src');

    expect(imgRender.includes(img)).toBe(true);
  });


  test('Caso prueba 2: props "descripcion", recibe un "string" y renderiza un svg.', () => {
    const texto = 'Descripción del producto.';
    const wrapper = shallow(<CardGaleria src={img} descripcion={texto} precio={1000} id="01k2021" marca="Marca01" />);
    const descripcionEsperada = wrapper.find('.descrip_span').text();

    expect(descripcionEsperada).toEqual(texto);
  });
  
  test('Caso prueba 3: props "Precio", recibe un "number" y lo muestra como precio.',()=>{
    const precioNumero = 1500;
    const valorFormateado = agregarformatoPesos(precioNumero);
    const wrapper =shallow(<CardGaleria src={img} descripcion={descript} precio={precioNumero} id="01k2021" marca="Marca01" />);
    const precioEsperado = wrapper.find('.precio_card span').text();

    expect(precioEsperado).toEqual(valorFormateado);
  });

  test('Caso prueba 4: props "id", recibe un "string" y asigna la propiedad "id" en el div del "cardGaleria".', () => {
    const ide = 'kloikd03942gf';
    const wrapper = shallow(<CardGaleria src={img} descripcion={descript} precio={1000} id={ide} marca="Marca01" />);
    const idEsperado = wrapper.find('div.card_mod').prop('id');

    expect(idEsperado).toEqual(ide);
  });

  test('Caso prueba 5: props "marca", recibe un "string" y renderiza una marca.', () => {
    const marcaPrueba = 'Marca09';
    const marcaFormateada= `${marcaPrueba} `;
    const wrapper = shallow(<CardGaleria src={img} descripcion={descript} precio={1000} id="01k2021" marca={marcaPrueba} />);
    const marcaEsperada = wrapper.find('.caja_texto_cards strong').text();

    expect(marcaEsperada).toEqual(marcaFormateada);
  });
  
});