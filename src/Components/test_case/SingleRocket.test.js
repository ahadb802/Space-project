import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import SingleRocket from '../singlerocket/SingleRocket';
import store from '../redux/configureStore';

require('@testing-library/jest-dom');

describe('Test for My Single Rockets Rendering', () => {
  it('renders Single element Of My Rockets ', () => {
    const output = render(<Provider store={store}><SingleRocket /></Provider>);
    expect(output).toMatchSnapshot();
  });
});
