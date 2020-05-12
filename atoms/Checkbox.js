import React from 'react';

export default ({
  size = 12, children, background = '#eae8e8', name, checked, onChange, required, disabled, ...rest
}) => {
  const id = Math.random();
  return (
    <div className="checkbox" {...rest}>
      <input
        id={id}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        readOnly={!onChange}
        required={required}
        disabled={disabled}
      />
      <label htmlFor={id}>{children}</label>
      <style jsx>{`
        .checkbox {
          position: relative;
          margin-top: 10px;
          transition: all 0.1s ease-out;
          
          input {
            opacity: 0;
            width: ${size}px;
            height: ${size}px;
            position: absolute;
            margin-top: 7px;
            transition: all 0.1s ease-out;  
          }
        
          input + label {
            position: relative;
            cursor: pointer;
            padding: 0;
            display: inline-flex;
            align-items: baseline;
          }
        
          input + label::before {
            content: '';
            cursor: pointer;
            flex-shrink: 0;
            margin-right: 10px;
            display: inline-block;
            vertical-align: text-top;
            width: ${size}px;
            height: ${size}px;
            border-radius: 30px;
            background-image: linear-gradient(#272c2e , #272c2e);
          }

          input:hover + label::before {
            cursor: pointer;
          }
          
          input + label::after {
            content: '';
            cursor: pointer;
            flex-shrink: 0;
            position: absolute;
            display: inline-block;
            vertical-align: text-top;
            width: 32px;
            height: 32px;
            width: ${size + 1}px;
            height: ${size + 1}px;
            border-radius: 30px;
            left: 0px;
            background: ${background};
          }
  
          input:checked + label::after {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};
