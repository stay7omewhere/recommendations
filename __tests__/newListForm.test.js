/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import NewListForm from '../client/components/NewListForm';

describe('NewListForm Component', () => {
  const wrapper = shallow(<NewListForm showForm toggleShowForm={() => {}} addToList={() => {}} />);
  it('should have two buttons', () => {
    expect(wrapper.find('StyledListFormButton').length).toEqual(2);
  });

  it('should have a create button', () => {
    expect(wrapper.find('StyledListFormButton').contains('create')).toBe(true);
  });

  it('should have a cancel button', () => {
    expect(wrapper.find('StyledListFormButton').contains('cancel')).toBe(true);
  });
});
