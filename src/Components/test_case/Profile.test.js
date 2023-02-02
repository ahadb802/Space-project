import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Profile from '../pages/profile/Profile';
import store from '../redux/configureStore';

require('@testing-library/jest-dom');

describe('Test for Profile component', () => {
  it('renders Profile component without any error', () => {
    const output = render(<Provider store={store}><Profile /></Provider>);
    expect(output).toMatchSnapshot();
  });
});
