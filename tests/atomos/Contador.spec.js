import React from 'react';
/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import Contador from '../../src/front/atomos/itemHeader/Contador';

describe('<Contador />', () => {

  const numberTest = 5;
  const wrapper = shallow( <Contador number={numberTest}  /> );


  test('Primer SnapShot: <Contador />', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Caso prueba 1: validando render de props number:number.', () => {
    const numeroEsperado = wrapper.find('.cantidad_productos').text();
    expect(numeroEsperado).toEqual(numberTest.toString());
  });

});