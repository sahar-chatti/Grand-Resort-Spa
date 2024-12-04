import '@testing-library/jest-dom';
import { act } from 'react';
import { cleanup } from '@testing-library/react';

afterEach(() => {
  act(() => {
    cleanup();
  });
});