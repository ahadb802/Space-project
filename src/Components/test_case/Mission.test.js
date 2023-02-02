import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Mission from '../pages/Rocket/Rocket';
import store from '../redux/configureStore';

require('@testing-library/jest-dom');

describe('Test for Rocket component', () => {
  it('renders Rocket component without any error', () => {
    const output = render(<Provider store={store}><Mission /></Provider>);
    expect(output).toMatchSnapshot();
  });
});
