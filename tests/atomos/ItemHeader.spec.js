import React from 'react';
/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import ItemHeader from '../../src/front/atomos/itemHeader/ItemHeader';

describe('<ItemHeader />', () => {
  const title = "boton"
  const wrapper = shallow( <ItemHeader title={title} /> );

  test('Primer SnapShot: <ItemHeader />', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Caso prueba 1: validando render de props title:string.', () => {
    const itemEsperado = wrapper.find('.contenido_btn').text();
    expect(itemEsperado).toEqual(title);
  });

  test('Caso prueba 2: item de tipo boton.', () => {
    // const wrapper = shallow( <ItemHeader title={title} tipoCart handleClickCart={} /> );
    // const itemEsperado = wrapper.find('.contenido_btn').text();
    // expect(itemEsperado).toEqual(title);
  });

});