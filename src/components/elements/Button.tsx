import React, { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { };

const Button: FC<ButtonProps> = ({ children, ...attributes }) => {
  return (
    <button
      className='btn'
      type="button"
      {...attributes}
    >
      {children}
    </button >
  );
};

export default Button;