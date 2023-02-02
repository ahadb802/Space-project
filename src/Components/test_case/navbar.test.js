import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

require('@testing-library/jest-dom');

describe('Test for Navbar component', () => {
  it('renders Navbar component without any error', () => {
    const output = render(<BrowserRouter><Navbar /></BrowserRouter>);
    expect(output).toMatchSnapshot();
  });
});
