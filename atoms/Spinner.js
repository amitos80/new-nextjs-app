import React from 'react';
import classNames from 'classnames'
import colors from '~/colors';


export default ({ className, borderWidth='6px', height = '90px', width = '90px', left='calc(50% - 45px)',
  background = '#ec1843', margin = 'auto', position='absolute', top='calc(50% - 45px)' }) => {
  return (
    <div className={classNames(className, 'spinner-container', 'loading')}>

        <div
          className="spinner"
          style={{

          }}
        />


      <style jsx>{`
          .spinner-container {
            position: ${position};
            top: ${top};
            left: ${top};
            display: block;
            z-index: 1030;
          }

          .spinner {
            animation: 370ms linear infinite spinner;
            border-width: ${borderWidth};
            border-style: solid;
            border-bottom-color: transparent;
            border-left-color: ${colors.purple};
            border-radius: 50%;
            border-right-color: transparent;
            border-top-color: ${colors.orange};
            box-sizing: border-box;
            height: ${height};
            width: ${width};
            z-index: 1031;
          }

          @keyframes spinner {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }


        `}</style>
    </div>
  );
};
