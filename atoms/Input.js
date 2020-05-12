import React from 'react';
import classNames from 'classnames';
import { propsToCss } from '~/style-system'

const Input = (props) => {
  const { className, placeholder, type, name, value, maxLength, onClick, onChange, onKeyPress, onFocus, onBlur,
    flex, maxWidth, width, height, right, bottom, left, position, maxHeight, borderRadius, borderRadiusTop, borderRadiusBottom, shadow } = props;
  return (
    <input
      placeholder={placeholder}
      className={classNames('input', className)}
      type={type}
      name={name}
      value={value}
      maxLength={maxLength}
      onClick={onClick}
      onChange={onChange}
      onKeyPress={onKeyPress}
      onFocus={onFocus}
      onBlur={onBlur}
    >
    <style jsx>{`
          .input {
            display: block; 
            flex: ${flex};
            width: ${width};
            height: ${height};
            max-width: ${maxWidth};
            max-height: ${maxHeight};
            position: ${position};
            top: ${top};
            right: ${right};
            bottom: ${bottom};
            left: ${left};
            border-radius: ${borderRadius};
            border-top-right-radius: ${borderRadiusTop};
            border-top-left-radius: ${borderRadiusTop};
            border-bottom-right-radius: ${borderRadiusBottom};
            border-bottom-left-radius: ${borderRadiusBottom};
            box-shadow: ${shadow && '0 6px 6px 0 rgba(0, 0, 0, 0.16)'};
            ${propsToCss(props)}
          }
        `}
    </style>
  </input>
);
}


export default Input;
