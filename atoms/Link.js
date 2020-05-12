import React, { Component } from 'react';
import { propsToCss } from '~/style-system'
import routes from '~/routes';
import classNames from 'classnames'
import colors from '~/colors'


class Link extends Component {
  constructor (props) {
    super(props);

    this.state = {
      fetched: false
    }
  }

  componentWillMount () {
    const { route, prefetch } = this.props;
    if (prefetch && !this.state.fetched && typeof window !== 'undefined') {
      this.setState({ fetched: true })
      routes.Router.prefetch(route)
    }
  }

  render () {
    const { children, route, params= {}, className, background = 'transparent', fontSize = '14px', position = 'relative', opacity = 1, ellipsis, marquee,
      height, width, textAlign = 'left', alignSelf, borderRadius = 0, padding = 0, margin = 0, shadow, display = 'block', disabled,
      fontWeight = 'bold', minHeight, textShadow, fontStyle, lineHeight, color, top, left, bottom, right,  uppercase, onClick, textTransform } = this.props;

    return (
      <span>
        {disabled && <span className={classNames(className, 'link')}>
            {children}
        </span>}
        {!disabled && <routes.Link route={route} params={params}>
          <a className={classNames(className, 'link')} onClick={onClick}>
            {children}
          </a>
        </routes.Link>}
            <style jsx>{`
            .link {
              font-family: Montserrat;
              position: relative;
              transition: background 0.2s ease-in-out;
              display: ${display};
              opacity: ${opacity};
              font-size: 70px;
              cursor: ${disabled ? 'default' : 'pointer'};
              font-weight: ${fontWeight};
              text-align: ${textAlign};
              align-self: ${alignSelf};
              padding: ${padding};
              background-color: ${background};
              border-radius: ${borderRadius};
              color: ${color || colors.text2};
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
              font-size: ${fontSize};
              width: ${width};
              height: ${height};



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

              ${propsToCss(this.props)}
            }
          `}</style>
      </span>
    );
  }
}

export default Link;
