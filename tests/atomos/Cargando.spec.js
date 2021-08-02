import React from 'react';
/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import Cargando from '../../src/front/atomos/spinner/Cargando';

describe('<Cargando />', () => {

  const mensaje='Por favor, espere.';
  const svg=true; // Valor por defecto renderiza un spinner sencillo del componente.
  const girando=true;
  const css="clase_prueba";

  const wrapper = shallow( <Cargando mensaje={mensaje} svg={svg} girando={girando} css={css} />);

  test('Primer SnapShot: <Cargando />', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Caso prueba 1: validación de "mensaje" en componente.', () => {
    const mensajeEsperado = wrapper.find('.text_component_carga').text();
    expect(mensajeEsperado).toBe(mensaje);
  });


  test('Caso prueba 2: validación de "girando" en componente agrega la clase "anim_girar".', () => {
    const mensajeEsperado = wrapper.find('img').prop('className'); 
    expect(mensajeEsperado.includes('anim_girar')).toBeTruthy();
  });

  test('Caso prueba 3: validación de "css" en componente agrega la clase "anim_girar".', () => {
    const cssEsperado = wrapper.find('.container').prop('className'); 
    expect(cssEsperado.includes(css)).toBeTruthy();
  });
});