/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
import { Button as AntButton } from 'antd';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'link' | 'text' | 'default' | 'primary' | 'dashed';
}

const Button = ({ children, onClick, className, type }: ButtonProps) => {
  return (
    <AntButton className={className} type={type} onClick={onClick}>
      {children}
    </AntButton>
  );
};

export default Button;
