import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

test('renders correctly', () => {
  const rockets = renderer
    .create(<Router><Navbar /></Router>)
    .toJSON();
  expect(rockets).toMatchSnapshot();
});
