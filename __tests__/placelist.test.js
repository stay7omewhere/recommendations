/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import PlaceList from '../client/components/PlaceList';

describe('PlaceList Component', () => {
  const testPlaceList = [
    {
      savedList: [
        'pariatur',
        'maxime',
        'molestiae',
        'officia',
      ],
      _id: '5d5f783caebb1242a4744559',
      id: 59,
      url: 'https://mock-property-images.s3-us-west-1.amazonaws.com/houses/house-59.jpeg',
      title: 'Ea quo eveniet nihil impedit qui cumque.',
      city: 'Port Buddyberg',
      plusVerified: true,
      propertyType: 'officia ex ad',
      price: 234,
      averageReview: 4.392379782123551,
      totalReviews: 146,
      __v: 0,
    },
    {
      savedList: [
        'molestiae',
        'officia',
      ],
      _id: '5d5f783caebb1242a4744550',
      id: 50,
      url: 'https://mock-property-images.s3-us-west-1.amazonaws.com/houses/house-50.jpeg',
      title: 'Earum qui dicta officia qui sunt error dolores.',
      city: 'Gretchenfort',
      plusVerified: true,
      propertyType: 'perferendis consequatur ab',
      price: 194,
      averageReview: 4.132387970123906,
      totalReviews: 176,
      __v: 0,
    },
    {
      savedList: [
        'officia',
      ],
      _id: '5d5f783caebb1242a4744558',
      id: 58,
      url: 'https://mock-property-images.s3-us-west-1.amazonaws.com/houses/house-58.jpeg',
      title: 'Consequatur magni quia id.',
      city: 'Albaburgh',
      plusVerified: true,
      propertyType: 'ex porro numquam',
      price: 259,
      averageReview: 4.062855602041324,
      totalReviews: 166,
      __v: 0,
    },
  ];

  const biggerTestPlaceList = [...testPlaceList, {
    savedList: [
      'pariatur',
      'maxime',
      'molestiae',
      'officia',
    ],
    _id: '5d5f783caebb1242a4744559',
    id: 59,
    url: 'https://mock-property-images.s3-us-west-1.amazonaws.com/houses/house-59.jpeg',
    title: 'Ea quo eveniet nihil impedit qui cumque.',
    city: 'Port Buddyberg',
    plusVerified: true,
    propertyType: 'officia ex ad',
    price: 234,
    averageReview: 4.392379782123551,
    totalReviews: 146,
    __v: 0,
  }];

  const wrapper = shallow(
    <PlaceList places={testPlaceList} savedList={[]} renderList={() => {}} />,
  );
  const wrapperBig = shallow(
    <PlaceList places={biggerTestPlaceList} savedList={[]} renderList={() => {}} />,
  );

  it('should dynamically render multiple places', () => {
    expect(wrapper.children().length).toBe(3);
  });

  it('should render the Place component', () => {
    expect(wrapper.find('Place').exists());
  });

  it('should have correct initial states', () => {
    expect(wrapper.state()).toEqual({ index: 0, end: false, start: true });
    expect(wrapperBig.state()).toEqual({ index: 0, end: false, start: true });
  });

  it('should change index accordingly on click', () => {
    wrapper.find({ name: 'next' }).simulate('click');
    expect(wrapper.state('index')).toEqual(1);
    wrapper.find({ name: 'prev' }).simulate('click');
    expect(wrapper.state('index')).toEqual(0);
  });

  it('should change start and end state when limits are reached', () => {
    expect(wrapperBig.state('start')).toBe(true);
    wrapperBig.find({ name: 'next' }).simulate('click');
    expect(wrapperBig.state('end')).toBe(true);
    wrapperBig.find({ name: 'prev' }).simulate('click');
    expect(wrapperBig.state('start')).toBe(true);
  });
});
