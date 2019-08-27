/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import SavedList from '../client/components/SavedList';

describe('SavedList Component', () => {
  const testPlace = {
    _id: '1231sd5a1sd5a6sd1',
    averageReview: 4.931936565117398,
    city: 'North Carolanne',
    id: 1,
    plusVerified: false,
    price: 210,
    propertyType: 'ut aut ut',
    savedList: ['incidunt', 'quibusdam', 'consequatur'],
    title: 'Tenetur numquam sed ut non ex voluptas ut qui.',
    totalReviews: 149,
    url: 'test.jpeg',
  };

  const savedList = [
    {
      _id: '5d5f783caebb1242a474451a',
      name: 'incidunt',
    },
    {
      _id: '5d5f783caebb1242a474451b',
      name: 'quibusdam',
    },
    {
      _id: '5d5f783caebb1242a474451c',
      name: 'consequatur',
    },
    {
      _id: '5d5f783caebb1242a474451d',
      name: 'test1',
    },
    {
      _id: '5d5f783caebb1242a474451e',
      name: 'test2',
    },
  ];

  const wrapper = shallow(
    <SavedList
      savedList={savedList}
      currentPlace={testPlace}
      closeList={() => {}}
      expanded={false}
      toggleExpanded={() => {}}
    />,
  );

  it('should dynamically render a list', () => {
    expect(wrapper.find('SavedListEntry').length).toEqual(5);
  });

  it('should render an exit button', () => {
    expect(wrapper.find('ExitButton').exists());
  });

  it('should render a title', () => {
    expect(wrapper.find('SavedListTitle').text()).toEqual('Save to list');
  });

  it('should render an option to create a new list', () => {
    expect(wrapper.find('NewList').text()).toEqual('Create New List');
  });
});
