import React from 'react';
/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import Exc404 from '../../src/pages/Exc404';

describe('<Exc404 />', () => {

  test('Primer SnapShot: <Exc404 />', () => {
    const wrapper = shallow( <Exc404 />);
    expect(wrapper).toMatchSnapshot();
  });
  
});
