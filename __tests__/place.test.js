import React from 'react';
import { shallow, configure } from 'enzyme';
import Place from '../client/components/Place';

describe('Place Component', () => {
  const testPlace = {
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
    expect(wrapper.containsMatchingElement(<div>Tenetur numquam sed ut non ex voluptas ut qui.</div>)).toBe(true);
  });

  it('should render the property type and city', () => {
    const wrapper = shallow(<Place place={testPlace} />);
    expect(wrapper.containsMatchingElement(
      <div>
        ut aut ut
        <span> · </span>
        North Carolanne
      </div>,
    )).toBe(true);
  });
});
