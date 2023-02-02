import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import SingleUIProfile from '../SingleUIProfile/SingleUIProfile';
import store from '../redux/configureStore';

require('@testing-library/jest-dom');

describe('Test for My Profile and My Mission reservation', () => {
  it('renders Single element Of My reserved Rockets and Join Mission without any error', () => {
    const output = render(<Provider store={store}><SingleUIProfile /></Provider>);
    expect(output).toMatchSnapshot();
  });
});
