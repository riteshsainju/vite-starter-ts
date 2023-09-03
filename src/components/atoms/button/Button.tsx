/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
import React, { MouseEvent } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}

function Button({ children, onClick, type }: ButtonProps) {
  // const Button: FC<ButtonProps> = ({ children, onClick, type = 'button' }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
};

export default Button;
