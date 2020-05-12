import React from 'react'
import { propsToCss } from '~/style-system'
import breakpoints from '~/breakpoints'
import { CSSTransitionGroup } from 'react-transition-group';
``
class Animation extends React.Component {

  render() {
    const { children, name = 'fade', width = '240px', transitionAppear = true, transitionEnter = false, transitionLeave = false,
      transitionAppearTimeout = 1100, transitionEnterTimeout = 1100, transitionLeaveTimeout = 1100,
      height, shadow = true, background, ...rest } = this.props;
    return (
      <span>
      <CSSTransitionGroup
        className={name}
        transitionName={ {
          enter: `${name}-enter`,
          leave: `${name}-leave`,
          appear: `${name}-appear`
        } }
        transitionAppear={transitionAppear}
        transitionEnter={transitionEnter}
        transitionLeave={transitionLeave}
        transitionAppearTimeout={transitionAppearTimeout}
        transitionEnterTimeout={transitionEnterTimeout}
        transitionLeaveTimeout={transitionLeaveTimeout} >
        {children}
      </CSSTransitionGroup>
        <style jsx global>{`
        
        .move {
          transition: transform 1000ms ease-in-out;
        }
        
        .move-enter {
            opacity: 0.01;
            transform: translate(0, 0);
            transition: transform 1000ms ease-in-out;
        }
        
        .move-enter.move-enter-active {
            opacity: 0.01;
            transform: translate(0, 0);
            transition: transform 1000ms ease-in-out;
        }
        
        .move-leave-.move-leave-active {
            opacity: 1;
            transform: translate(-70%, -100%);
            transition: transform 1000ms ease-in-out;
        }
        
        .move-appear {
            opacity: 0.01;
            transform: translate(0, 0);
            transition: transform 1000ms ease-in-out;
        }
        
        .background-enter {
          transform: translate(100%);
        }
        .background-enter.background-enter-active {
          transform: translate(0%);
          transition: transform 1000ms ease-in-out;
        }
        .background-leave {
          transform: translate(0%);
        }
        .background-leave.background-leave-active {
          transform: translate(-100%);
          transition: transform 1000ms ease-in-out;
        }
  
        `}</style>
        </span>
    );
  }
}

export default Animation;
