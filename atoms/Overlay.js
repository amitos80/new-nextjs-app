import React from 'react';
import classNames from 'classnames';

export default ({ onClick, className }) => {
  return (
    <div className={classNames(className, 'overlay')} onClick={onClick}>
      <style jsx>{`
          .overlay {
            position: fixed;
            display: block;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 1;
            overflow: hidden;
          }
          
      `}</style>
    </div>
  );
};
