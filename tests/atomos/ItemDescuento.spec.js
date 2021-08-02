import React from 'react';
/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import ItemDescuento from '../../src/front/atomos/descuento/ItemDescuento';
import { agregarformatoPesos } from '../../src/utils/FormatUtil';



describe('<ItemDescuento />', () => {

  const numberDiscount = 100;
  const marca = "Marca01";
  const threshold = 150;
  let wrapper = shallow( <ItemDescuento discount={numberDiscount} threshold={threshold} marca={marca} />);

  beforeEach(()=>{
    wrapper = shallow( <ItemDescuento discount={numberDiscount} threshold={threshold} marca={marca} />);
  });
  
  test('Primer SnapShot: <ItemDescuento />', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Caso prueba 1: props "discount", debe renderizar el "number:discount" recibido por props.', () => {
    const numberFormateado = `-${agregarformatoPesos(numberDiscount)}`;
    const descuentoEsperado = wrapper.find('.promo_title').at(1).text();
    expect(descuentoEsperado).toEqual(numberFormateado);
  });

  test('Caso prueba 2: props "threshold", debe renderizar el "number:threshold" recibido por props.', () => {
    const thresholdFormateado = `${agregarformatoPesos(threshold)}`;
    const thresholdEsperado = wrapper.find('.promo_descript strong').at(1).text();
    expect(thresholdEsperado).toEqual(thresholdFormateado);
  });

  test('Caso prueba 3: props "marca", debe renderizar el "string:marca" recibido por props.', () => {
    const marcaFormateada = ` en productos ${marca}!`;
    const marcaEsperada = wrapper.find('.promo_descript span').at(2).text();
    expect(marcaEsperada).toEqual(marcaFormateada);
  });
  
});
