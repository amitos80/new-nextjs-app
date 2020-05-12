import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from 'classnames';
import { propsToCss } from '~/style-system'


const Icon = (props) => {
  const { children, name, pref = 'fas', color, margin = 0, position = 'relative', padding = 0, shadow, textAlign, borderRadius, borderRadiusTop = 0, borderRadiusBottom = 0,
    background = 'transparent', width, height , display = 'inline-block', alignSelf, flex, opacity, fontSize,
    flexDirection, top, left, bottom, right, maxHeight, maxWidth, justifyContent, ...rest } = props;
  return (
    <i className={classNames('new-app-icon')} >
      <FontAwesomeIcon icon={[pref, name]}  {...rest}>
        {children}
      </FontAwesomeIcon>
      <style jsx>{`

        i.new-app-icon {
            flex: ${flex};
            font-size: ${fontSize};
            max-height: ${maxHeight};
            width: ${width};
            height: ${height};
            max-width: ${maxWidth};
            display: ${display};
            opacity: ${opacity};
            padding: ${padding};
            margin: ${margin};
            background-color: ${background};
            text-align: ${textAlign};
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
            background-color: ${background};
            color: ${color};
            text-align: ${textAlign};
            flex-direction: ${flexDirection};
            justify-content: ${justifyContent};
            align-self: ${alignSelf};
            opacity: ${opacity};
            -webkit-filter: ${shadow && `drop-shadow(0 6px 6px 0 rgba(0, 0, 0, 0.16))`} !important;
            filter: ${shadow && `drop-shadow(0 6px 6px 0 rgba(0, 0, 0, 0.16))`} !important;


            > svg {
              opacity: ${opacity};
              width: ${width};
              height: ${height};
              -webkit-filter: ${shadow && `drop-shadow(0 6px 6px 0 rgba(0, 0, 0, 0.16))`} !important;
              filter: ${shadow && `drop-shadow(0 6px 6px 0 rgba(0, 0, 0, 0.16))`} !important;
            }

            svg {
              opacity: ${opacity} !important;

            }
        }
      `}</style>
    </i>
  );
}

export default Icon;
