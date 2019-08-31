/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import SavedListEntry from '../client/components/SavedListEntry';
import * as CurrentPlaceContextModule from '../client/context/CurrentPlaceContext';
import * as PlacesContextModule from '../client/context/PlacesContext';

describe('SavedListEntry Component', () => {
  const listName = 'test string';
  const favorited = false;

  jest.spyOn(CurrentPlaceContextModule, 'useCurrentPlaceContext').mockImplementation(() => [
    {}, () => {},
  ]);

  jest.spyOn(PlacesContextModule, 'usePlacesContext').mockImplementation(() => [
    [], () => {},
  ]);

  const wrapper = shallow(<SavedListEntry
    toggleHeart={() => {}}
    listName={listName}
    favorited={favorited}
  />);


  it('should render the list name', () => {
    expect(wrapper.find('ListEntry').text()).toContain('test string');
  });

  it('should render a heart', () => {
    expect(wrapper.find('Heart').exists());
  });
});
