import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Rockets from '../components/Rockets';
import store from '../redux/configureStore';
import '@testing-library/jest-dom';

test('renders correctly', () => {
  const rockets = renderer
    .create(<Provider store={store}><Rockets /></Provider>)
    .toJSON();
  expect(rockets).toMatchSnapshot();
});

test('List is created', () => {
  const { container } = render(<Provider store={store}><Rockets /></Provider>);
  const list = container.querySelector('.rockets-list');
  expect(list).toBeInTheDocument();
});
