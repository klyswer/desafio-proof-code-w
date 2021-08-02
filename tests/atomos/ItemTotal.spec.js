import React from 'react';
/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import ItemTotal from '../../src/front/atomos/total/ItemTotal';
import { agregarformatoPesos } from '../../src/utils/FormatUtil';

describe('<ItemTotal />', () => {

  const promoAplica= true;
  const subTotal = 1000; 
  const discount= 40;

  const wrapper = shallow( <ItemTotal promoAplica={promoAplica} subTotal={subTotal} discount={discount} />);

  test('Primer SnapShot: <ItemTotal />', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Caso prueba 3: validación de "total" menos el "descuento.', () => {
    const totalFormato = agregarformatoPesos(subTotal-discount);
    const totalEsperado = wrapper.find('.total_value strong').text();
    expect(totalEsperado).toBe(totalFormato);  
  });
  
});