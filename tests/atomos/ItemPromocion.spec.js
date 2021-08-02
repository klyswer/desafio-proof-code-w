import React from 'react';
/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import ItemPromocion from '../../src/front/atomos/promocion/ItemPromocion';
import { agregarformatoPesos } from '../../src/utils/FormatUtil';

describe('<ItemPromocion />', () => {

  const objPromo = {
    marca:"Marca02",
    discount:100,
    faltante:140
  }

  const wrapper = shallow( <ItemPromocion datosPromocion={objPromo} />);

  test('Primer SnapShot: <ItemPromocion />', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Caso prueba 1: validación de "marca" en componente.', () => {
    const marcaEsperada = wrapper.find('.promocion_container span').at(1).text();
    expect(marcaEsperada.includes(objPromo.marca)).toBeTruthy();
  });

  test('Caso prueba 2: validación de "discount" en componente.', () => {
    const discountFormat = agregarformatoPesos(objPromo.discount);
    const discountEsperado = wrapper.find('.promocion_container strong').at(1).text();
    expect(discountEsperado).toBe(discountFormat);
  });

  test('Caso prueba 2: validación de "faltante" en componente.', () => {
    const faltanteFormat = agregarformatoPesos(objPromo.faltante);
    const faltanteEsperado = wrapper.find('.promocion_container strong').at(0).text();
    expect(faltanteEsperado).toBe(faltanteFormat);
  });
  
});