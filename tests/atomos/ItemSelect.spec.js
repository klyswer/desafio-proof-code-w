import React from 'react';
/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import ItemSelect from '../../src/front/atomos/itemSelect/ItemSelect';

describe('<ItemSelect />', () => {

  const id='kdi293dl';
  const marca="Marca01";
  const src='aire.cl';
  const nombre="Elm 1";
  const precio=1000;
  const handleEliminar=()=>{};

  const wrapper = shallow( <ItemSelect id={id} marca={marca} src={src} nombre={nombre} precio={precio} handleEliminar={handleEliminar} />);

  test('Primer SnapShot: <ItemSelect />', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
});
