/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/export */
import { cleanup, render } from '@testing-library/react';
import { afterEach } from 'vitest';

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';

afterEach(() => {
  cleanup();
});

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  });
}

// override render export
export { customRender as render };
