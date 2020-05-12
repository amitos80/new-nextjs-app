import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import * as modal from '~/reducers/modal';
import { Overlay } from '~/atoms';
import { connect } from 'react-redux'
import { Button } from '~/atoms'


const MODAL_OPEN_CLASS = 'modal-open';
const MODAL_CLOSE_CLASS = 'modal-close';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.el = document.createElement('div');
    document.body.appendChild(this.el);
    document.body.classList.add(MODAL_OPEN_CLASS);
  }

  close() {
    const { close } = this.props;
    document.body.classList.remove(MODAL_OPEN_CLASS);
    document.body.classList.remove(MODAL_OPEN_CLASS);
    document.body.classList.add(MODAL_CLOSE_CLASS);

    setTimeout(() => {
      console.log('close -> ');
      close();
    }, 250);
  }

  componentWillUnmount() {
    document.body.classList.remove(MODAL_OPEN_CLASS);
    document.body.classList.remove(MODAL_CLOSE_CLASS);
    document.body.removeChild(this.el);
    clearTimeout(this.timeout);
  }

  render() {
    const { children, close, width, height, maxWidth, borderRadius } = this.props;

    return ReactDOM.createPortal(
      <div className="modal-root">
        <div className="modal-container" style={{ width, height, borderRadius, maxWidth }}>
          <div className="close-button-container">
            <Button
              className="close-button"
              onClick={this.close.bind(this)}
              background="rgba(255, 255, 255, .5)"
              padding="8px">
              X
            </Button>
          </div>
          {children}
        </div>
        <Overlay onClick={close} />
        <style jsx global>{`
            @keyframes modalIn {
              from {opacity: 0;}
              to {opacity: 1;}
            }
            
            @keyframes modalOut {
              from {opacity: 1;}
              to {opacity: 0}
            }

            .modal-root {
                animation-name: modalIn;
                animation-duration: .35s;
            }
          
            body.modal-close {
              .modal-root {
                animation-name: modalOut !important;
              }
            }
        `}</style>
        <style jsx>{`
          
          .modal-root {
            display: flex;
            flex-direction: row;
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            width: 100%;
            height: auto;
            z-index: 4;
          }
          
          .${MODAL_OPEN_CLASS} {
            margin: 0;
           }  
          
          .modal-container {
            height: 0;
            position: relative;
            display: block;
            margin: 20px auto 0 auto;
            background: white;
            box-shadow: 0 24px 24px 0 rgba(0, 0, 0, 0.3), 0 0 24px 0 rgba(0, 0, 0, 0.22);
            z-index: 7;
            max-height: 100%;
            transition: all 1.8s ease-out;
          }
        
          .close-button-container {
              position: absolute;
              right: 0;
              top:0;
              width: 35px;
              height: 35px;
              pointer-events: all;
              z-index: 1;
          }
          
          .close-button {
            display: block;
            width: 100%;
            height: 100%;
            pointer-events: all;
            cursor: pointer;
            z-index: 1;
            font-weight: 900;
            background: none !important;
            padding: 0;
          }

          @media only screen and (max-width: 769px) {
            .modal-container {
              margin: 0 auto 0 auto;
            }
          } 
           
          `}</style>


      </div>,
      this.el
    );
  }
}

function mapStateToProps(state) {
  return { modal: state.modal };
}

function mapDispatchToProps(dispatch, props) {
  return {
    close: () => {
      dispatch(modal.close());

      if (props.onClose) {
        props.onClose();
      }
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Modal)
