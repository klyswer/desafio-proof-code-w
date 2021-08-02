import React from 'react';
/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import ItemSubTotal from '../../src/front/atomos/subTotal/ItemSubTotal';
import { agregarformatoPesos } from '../../src/utils/FormatUtil';

describe('<ItemSubTotal />', () => {

  const subTotal = 1000;
  const wrapper = shallow( <ItemSubTotal subTotal={subTotal} />);

  test('Primer SnapShot: <ItemSubTotal />', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Caso prueba 1: validación de "subTotal" en componente.', () => {
    const subTotalFormato = agregarformatoPesos(subTotal);
    const subTotalEsperado = wrapper.find('.sub_total_value').text();
    expect(subTotalEsperado).toBe(subTotalFormato);
  });
  
});