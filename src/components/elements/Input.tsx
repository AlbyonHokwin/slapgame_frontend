import React, { InputHTMLAttributes, FC } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
}

const Input: FC<InputProps> = ({ name, label = "", ...attributes }) => {
  return (
    <div className=''>
      <label htmlFor='name'>{label}</label>
      <input id='name' {...attributes} />
    </div>
  );
};

export default Input;