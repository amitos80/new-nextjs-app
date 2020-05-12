import React from 'react'
import { propsToCss } from '~/style-system'
import classNames from 'classnames'

const Box = (props) => {
  const { children, margin = 0, overflow, className, position = 'relative', padding = 0, gradient, shadow, textAlign, border, borderRadius, borderRadiusTop = 0, borderRadiusBottom = 0,
    background = 'transparent', width = 'auto', height = 'auto', display = 'block', alignSelf, flex, opacity, minHeight,
    flexDirection, borderTop, color, cursor, zindex, backgroundImage, innerRef, boxShadow,
    fontWeight, fontSize, top, lineHeight, hoverGradient = false, transitionSpeed = '0.12', left, bottom, right, onClick, maxHeight, maxWidth, justifyContent, ...rest } = props;
  return (
    <div className={classNames(className, 'box')} ref={innerRef} onClick={onClick} {...rest}>
      {children}
      <style jsx>{`
      .box {
        flex: ${flex};
        height: ${height};
        max-height: ${maxHeight};
        width: ${width};
        max-width: ${maxWidth};
        display: ${display};
        opacity: ${opacity};
        padding: ${padding};
        margin: ${margin};
        min-height: ${minHeight};
        font-weight: ${fontWeight};
        font-size: ${fontSize};
        background-color: ${background};
        color: ${color};
        text-align: ${textAlign};
        box-shadow: ${shadow && '0 6px 6px 0 rgba(0, 0, 0, 0.16)'};
        flex-direction: ${flexDirection};
        justify-content: ${justifyContent};
        align-self: ${alignSelf};
        position: ${position};
        top: ${top};
        left: ${left};
        bottom: ${bottom};
        right: ${right};
        border-top-right-radius: ${borderRadiusTop};
        border-top-left-radius: ${borderRadiusTop};
        border-bottom-right-radius: ${borderRadiusBottom};
        border-bottom-left-radius: ${borderRadiusBottom};
        border-radius: ${borderRadius};
        z-index: ${zindex};
        cursor: ${cursor};
        border-top: ${borderTop};
        border: ${border};
        overflow: ${overflow};
        line-height: ${lineHeight};
        boxShadow: ${boxShadow};
        pointer-events: all;

        background-image: ${gradient && 'linear-gradient(to top, #ff6540, #ec1843)'};
        background-image: ${backgroundImage};
        ${propsToCss(props)}
        
        transition: all ${transitionSpeed}s ease-in-out;
        
        &:hover {
          background: ${hoverGradient && 'linear-gradient(to left, #ff6c00 37%,  #4a0080 65%)'};
          background-clip: ${hoverGradient && 'text'};
          text-fill-color: ${hoverGradient && 'transparent'};
          -webkit-background-clip: ${hoverGradient && 'text'};
          -webkit-text-fill-color: ${hoverGradient && 'transparent'};
          > * {
            background: ${hoverGradient && 'linear-gradient(to left, #ff6c00 37%,  #4a0080 65%)'};
            background-clip: ${hoverGradient && 'text'};
            text-fill-color: ${hoverGradient && 'transparent'};
            -webkit-background-clip: ${hoverGradient && 'text'};
            -webkit-text-fill-color: ${hoverGradient && 'transparent'};
          }
        }
      }     
    `}</style>
    </div>
  );
}
export default Box;
