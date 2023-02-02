import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rocket from '../pages/Rocket/Rocket';
import store from '../redux/configureStore';

require('@testing-library/jest-dom');

describe('Test for Rocket component', () => {
  it('renders Rocket component without any error', () => {
    const output = render(<Provider store={store}><Rocket /></Provider>);
    expect(output).toMatchSnapshot();
  });
});
