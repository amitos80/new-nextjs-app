import React, { Component } from 'react';
import { ModalManager } from '~/organisms';
import { Meta } from '~/atoms';
import classNames from 'classnames'
import { ThemeProvider } from 'styled-components'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'

const theme = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 0, // rem
    outerMargin: 0, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76  // rem
    },
    breakpoints: {
      xs: 0,  // em
      sm: 48, // em
      md: 64, // em
      lg: 75  // em
    }
  }
}


class Layout extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    const { className, card, modal, closeModal, openModal, children, title } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Grid fluid={true}>
          <Row>
            <Col xs={12} sm={12} lg={12} md={12}>
              <div className={classNames(className, 'layout')} key="transition-group-content">
                <Meta card={card} title={title} />
                {children}
                {openModal && <ModalManager modal={modal} closeModal={closeModal} openModal={openModal} />}
              </div>
              <style jsx global>{`
                * {
                  margin: 0;
                  padding: 0;
                  pointer-events: all;
                  touch-action: auto;
                }
                body { font-family: Montserrat; overflow-x: hidden; }
                img, a img { border: none; }
                input { outline: none; }

                button {
                  border: none;
                  appearance: none;
                  -webkit-appearance: none;
                  -moz-appearance: none;
                   cursor: pointer;
                }
                a:-webkit-any-link,
                a {  cursor: pointer; text-decoration: none; color: inherit; }
                *:focus {
                  outline: none;
                  -webkit-tap-highlight-color: transparent;
                  highlight-color: transparent;
                }
                * {
                  highlight-color: rgba(0,0,0,0);
                  -webkit-tap-highlight-color: transparent;
                }
                .slick-list {
                  padding: 0;
                }

                .fade-enter {
                  opacity: 0.01;
                }

                .fade-enter.fade-enter-active {
                  opacity: 1;
                  transition: opacity 1500ms ease-in;
                }

                .fade-leave {
                  opacity: 1;
                }

                .fade-leave.fade-leave-active {
                  opacity: 0.01;
                  transition: opacity 1300ms ease-in;
                }

                .fade-appear {
                  opacity: 0.01;
                }

                .fade-appear.fade-appear-active {
                  opacity: 1;
                  transition: opacity .3s ease-in;
                }



             `}</style>
              <style jsx>{`
              .layout {
                position: relative;
              }

              .fade-enter {
                opacity: 0.01;
              }

              .fade-enter.fade-enter-active {
                opacity: 1;
                transition: opacity 1500ms ease-in;
              }

              .fade-leave {
                opacity: 1;
              }

              .fade-leave.fade-leave-active {
                opacity: 0.01;
                transition: opacity 1300ms ease-in;
              }

            `}</style>
            </Col>
          </Row>

        </Grid>
      </ThemeProvider>


    )
  }
}

export { Layout, Grid, Col, Row };
