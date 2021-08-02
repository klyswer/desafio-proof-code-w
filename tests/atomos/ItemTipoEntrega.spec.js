import React from 'react';
/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import ItemTipoEntrega from '../../src/front/atomos/itemTipoEntrega/ItemTipoEntrega';

describe('<ItemTipoEntrega />', () => {

  const title = 'retiro';
  const wrapper = shallow( <ItemTipoEntrega texto={title} />);

  test('Primer SnapShot: <ItemSelect />', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Caso prueba 1: verificar default props: despacho.', () => {
    const renderItem = wrapper.find('.item_tipo_entrega').prop('className');
    expect(renderItem.includes('border_blue')).toBe(true);
  });

  test('Caso prueba 2: verificar default props: despacho.', () => {
    const renderItem2 = wrapper.find('.item_tipo_entrega span').at(0).prop('className');
    expect(renderItem2.includes('bg_img_blue')).toBeTruthy();
  });

  test('Caso prueba 3: verificar texto:string.', () => {
    const textoEsperado = wrapper.find('.text_entrega').text();
    expect(textoEsperado).toBe(title);
  });
  
  
});