import React from 'react';
/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import ItemCategoria from '../../src/front/atomos/itemCategoria/ItemCategoria';


describe('<ItemCategoria />', () => {


  test('Primer SnapShot', () => {
    const wrapper = shallow( <ItemCategoria title="Perfumeria" svg="aire.svg" />);
    expect(wrapper).toMatchSnapshot();
  });


  test('Caso prueba 1: props "title", debe renderizar el "string" recibido por props.', () => {
    const TitleCategory = 'Perfumería';
    const wrapper = shallow( <ItemCategoria title={TitleCategory} svg="aire.svg" />);
    const tituloCategoryRender = wrapper.find('.texto_categoria').text();

    expect(tituloCategoryRender).toBe(TitleCategory);
  });


  test('Caso prueba 2: props "svg", recibe un "string" y renderiza un svg.', () => {
    const img = 'aire.svg';
    const wrapper = shallow( <ItemCategoria svg={img} title="Perfumeria" />);
    const imgRender = wrapper.find('img').prop('src');
    
    expect(imgRender.includes(img)).toBe(true);
  });
  
  
});
