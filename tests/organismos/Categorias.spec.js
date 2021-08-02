import React from 'react';
/* eslint-disable no-undef */
import { mount } from 'enzyme';
import Categorias from '../../src/front/organismos/categorias/Categorias';


describe('<Categorias />', () => {

  const productos = [
      {id:1,title:'Juguetería',icon:'jugueteria.svg',active:false},
      {id:2,title:'Mundo Bebé',icon:'bebe.svg',active:false}
  ];

  const wrapper = mount(<Categorias listaCategorias={productos} />);

  test('Primer Snapshot: <Categorias />', () => { 
    expect(wrapper).toMatchSnapshot();
  });
  
});
