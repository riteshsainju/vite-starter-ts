import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('renders with text content', () => {
    const { getByText } = render(<Button>Click me</Button>);
    const button = getByText('Click me');
    expect(button).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', () => {
    const onClickMock = vi.fn();
    const { getByText } = render(
      <Button onClick={onClickMock}>Click me</Button>
    );
    const button = getByText('Click me');

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('renders with the correct type attribute', () => {
    const { getByText } = render(<Button type="submit">Submit</Button>);
    const button = getByText('Submit');

    expect(button.getAttribute('type')).toBe('submit');
  });
});
