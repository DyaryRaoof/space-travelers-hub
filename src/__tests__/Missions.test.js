import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Missions from '../components/Missions';
import MyProfile from '../components/MyProfile';
import store from '../redux/configureStore';

describe('test Mission component', () => {
  test('should contain table', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    return expect(screen.getByRole('table')).toBeInTheDocument;
  });
});

describe('test with jest snapshot', () => {
  it('should contain heading', () => {
    render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    return expect(screen.getByTestId('header')).toBeInTheDocument;
  });
});

describe('test with jest snapshot', () => {
  it('should render correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
