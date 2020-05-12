import React from 'react';
import classNames from 'classnames';
import { propsToCss } from '~/style-system'

const Span = (props) => {
  const { children, className, background = 'transparent', fontSize = '14px', position = 'relative', opacity = 1, ellipsis, marquee,
    height = 'auto', width = 'auto', textAlign = 'left', alignSelf, borderRadius = 0, padding = 0, margin = 0, shadow, display = 'inline-block',
    fontWeight = 'normal', minHeight, textShadow, fontStyle, lineHeight, color, top, left, bottom, right,  uppercase, onClick, textTransform } = props;

  return (
    <span className={classNames(className, 'span')} onClick={onClick}>
      {children}
      <style jsx>{`
            .span {
              font-family: Montserrat;
              position: relative;
              transition: background 0.2s ease-in-out;
              display: ${display};
              opacity: ${opacity};
              width: ${width};
              height: ${height};
              font-size: ${fontSize} !important;
              font-weight: ${fontWeight};
              text-align: ${textAlign};
              align-self: ${alignSelf};
              padding: ${padding};
              background-color: ${background};
              border-radius: ${borderRadius};
              color: ${color};
              line-height: ${lineHeight};
              position: ${position};
              top: ${top};
              left: ${left};
              bottom: ${bottom};
              right: ${right};
              margin: ${margin};
              box-shadow: ${shadow && '0 3px 6px 0 rgba(0, 0, 0, 0.16)'};
              text-transform: ${uppercase && 'uppercase'};
              text-transform: ${textTransform};
              font-style: ${fontStyle};
              min-height: ${minHeight};
              text-shadow: ${textShadow && '0 10px 10px rgba(0, 0, 0, 0.16)'};
              
              ${ellipsis && `
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  display: inline-block;`
              }
              
              ${marquee && ` 
                  -moz-transform: translateX(100%);
                  -webkit-transform: translateX(100%);
                  transform: translateX(100%);
                  -moz-animation: marquee 6s linear infinite;
                  -webkit-animation: marquee 6s linear infinite;
                  animation: marquee 6s linear infinite;
  
                  @-moz-keyframes marquee {
                   0%   { -moz-transform: translateX(100%); }
                   100% { -moz-transform: translateX(-100%); }
                  }
                  
                  @-webkit-keyframes marquee {
                   0%   { -webkit-transform: translateX(100%); }
                   100% { -webkit-transform: translateX(-100%); }
                  }
                  
                  @keyframes marquee {
                      0%   { 
                          -moz-transform: translateX(100%); 
                          -webkit-transform: translateX(100%);
                          transform: translateX(100%);
                      }
                      100% { 
                          -moz-transform: translateX(-100%);
                            -webkit-transform: translateX(-100%); 
                          transform: translateX(-100%); 
                      }
              }`}
              
              ${propsToCss(props)}
            }   
          `}</style>
    </span>
  );
}
export default Span;
