import React from 'react';
import { shallow } from 'enzyme';
import Button from '.';

describe('Button', () => {
  const wrapper = shallow(<Button>Test</Button>);
  it('renders childeren', () => {
    expect(wrapper.contains('Test')).toBe(true);
  });
});