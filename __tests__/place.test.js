/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import Place from '../client/components/Place';

describe('Place Component', () => {
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

  it('should render a picture', () => {
    const wrapper = shallow(<Place place={testPlace} />);
    expect(wrapper.containsMatchingElement(<img src="test.jpeg" />)).toBe(true);
  });

  it('should render a title', () => {
    const wrapper = shallow(<Place place={testPlace} />);
    expect(wrapper.containsMatchingElement(
      <div>Tenetur numquam sed ut non ex voluptas ut qui.</div>,
    )).toBe(true);
  });

  it('should render the property type and city', () => {
    const wrapper = shallow(<Place place={testPlace} />);
    expect(wrapper.containsMatchingElement(
      <div>
        <span>ut aut ut</span>
        <span> · </span>
        North Carolanne
      </div>,
    )).toBe(true);
  });
});
