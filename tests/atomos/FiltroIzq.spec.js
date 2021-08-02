import React from 'react';
/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import FiltroIzq from '../../src/front/atomos/filtroIzq/FiltroIzq';

describe('<FiltroIzq />', () => {

  const listaFiltros=[{"id": '1krp',"opcion": "Marca1","value":"Datos"}];
  const titleFilter = "Filtro de prueba";
  const wrapper = shallow( <FiltroIzq listaElm={listaFiltros} title={titleFilter}  /> );


  test('Primer SnapShot: <FiltroIzq />', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Caso prueba 1: validando render de props title:string.', () => {
    const titleEsperado = wrapper.find('.filtro_galeria').text();
    expect(titleEsperado).toEqual(titleFilter);
  });

});
