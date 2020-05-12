import React from 'react';
import classNames from 'classnames'
import { propsToCss } from '~/style-system'

export default (props) => {
  const { className, position, top, right, bottom, left, borderRadius,
    borderRadiusTop, borderRadiusBottom, width = '100%', flex, margin,
    height, src, alt, srcSet, onClick, maxHeight, maxWidth, shadow, imgHeight = '100%' } = props;
  return (
      <picture className={classNames(className, 'image-container')} alt={alt}>
        {srcSet && srcSet.map(set => (<source
          type="image/webp"
          srcSet={set.join(', ')}
        />))}
        <img alt={alt} src={src} onClick={onClick} width={width} height={height} />
        <style jsx>{`
          .image-container {
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
            margin: ${margin};
            border-radius: ${borderRadius};
            border-top-right-radius: ${borderRadiusTop};
            border-top-left-radius: ${borderRadiusTop};
            border-bottom-right-radius: ${borderRadiusBottom};
            border-bottom-left-radius: ${borderRadiusBottom};
            ${propsToCss(props)}
          }

          picture,
          img {
            display: block;
            width: 100%;
            height: ${imgHeight};
            max-width: ${maxWidth};
            max-height: ${maxHeight};
            border-radius: ${borderRadius};
            border-top-right-radius: ${borderRadiusTop};
            border-top-left-radius: ${borderRadiusTop};
            border-bottom-right-radius: ${borderRadiusBottom};
            border-bottom-left-radius: ${borderRadiusBottom};
            box-shadow: ${shadow && '0 6px 6px 0 rgba(0, 0, 0, 0.16)'};
          }
        `}
        </style>
      </picture>


  );
};
