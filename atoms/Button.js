import React from 'react';
import classNames from 'classnames'
import { propsToCss } from '~/style-system'

export default (props) => {
  const { children, disabled, className, background = 'transparent', fontSize = '14px', border = 'none',
    fontWeight = 'normal', textAlign = 'center', borderRadius, padding = '10px', color, onClick,
    margin = 0, position = 'relative', shadow, borderRadiusTop, borderRadiusBottom, verticalAlign,
    width = '100%', height = 'auto', display = 'inline-block', alignSelf, flex, opacity,
    flexDirection, top, left, bottom, right, maxHeight, maxWidth, justifyContent, zIndex, ...rest } = props;

  function handleClick(...args) {
    if (disabled) return;

    if (onClick) {
      onClick.call(null, args);
    }
  }

  return (
    <button className={classNames(className, 'button')} onClick={handleClick} disabled={disabled} {...rest}>
      {children}
      <style jsx>{`
      .button {
        border: ${border};
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none; 
        cursor: pointer;
        pointer-events: ${!disabled && 'all'};
        text-transform: uppercase;
        border-radius: 0;
        transition: all 0.2s ease-in-out;
        font-size: ${fontSize};
        font-weight: ${fontWeight};
        text-align: ${textAlign};
        padding: ${padding};
        background-color: ${background};
        color: ${color};
        vertical-align: ${verticalAlign};
        position: ${position};
        top: ${top};
        left: ${left};
        bottom: ${bottom};
        right: ${right};
        flex: ${flex};
        height: ${height};
        max-height: ${maxHeight};
        width: ${width};
        max-width: ${maxWidth};
        display: ${display};
        opacity: ${opacity};
        margin: ${margin};
        box-shadow: ${shadow && '0 6px 6px 0 rgba(0, 0, 0, 0.16)'};
        flex-direction: ${flexDirection};
        justify-content: ${justifyContent};
        align-self: ${alignSelf};
        border-top-right-radius: ${borderRadiusTop};
        border-top-left-radius: ${borderRadiusTop};
        border-bottom-right-radius: ${borderRadiusBottom};
        border-bottom-left-radius: ${borderRadiusBottom};
        border-radius: ${borderRadius};
        z-index: ${zIndex};
        
        > * {
          pointer-events: all;
          font-size: ${fontSize};
          z-index: ${zIndex};
        }
        ${propsToCss(props)}
      } 
      `}</style>
    </button>
  );
};
