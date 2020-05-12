import * as modal from '~/reducers/modal';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Layout } from '~/layouts';

class CompanyLayout extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    const { card, modal, closeModal, openModal, children, overflow = 'auto', title } = this.props;
    return (
      <Layout card={card} modal={modal} closeModal={closeModal} openModal={openModal} title={title}>
        <div className="app-layout">
          {children}
          <style jsx>{`
            .aoo-layout {
              height: 100vh;
              position: relative;
              overflow: ${overflow};
              overflow-x: hidden;
            }
          `}</style>
        </div>
      </Layout>
    )
  }
}


export const mapStateToProps = state => ({
  modal: state.modal,
});

export const mapDispatchToProps = dispatch => ({
  openModal: (name, settings) => dispatch(modal.open(name, settings)),
  closeModal: () => dispatch(modal.close()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyLayout)
