import { render, fireEvent, screen } from '@testing-library/react';
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

  it('renders with a custom class name', () => {
    render(<Button className="custom-button">Custom Button</Button>);
    const textContentElement = screen.getByText('Custom Button');
    const button = textContentElement.parentNode;
    expect(button).toHaveClass('custom-button');
  });
});
