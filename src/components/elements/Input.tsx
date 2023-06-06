import React, { InputHTMLAttributes, FC } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hideLabel?: boolean;
  name: string;
}

const Input: FC<InputProps> = ({ label, hideLabel = false, name, ...attributes }) => {
  return (
    <div className=''>
      <label className={`${hideLabel ? 'hidden' : ''}`} htmlFor='name'>{label}</label>
      <input id='name' {...attributes} />
    </div>
  );
};

export default Input;