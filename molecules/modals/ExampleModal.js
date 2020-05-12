import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { useSelector } from 'react-redux';
import { Animation } from '~/atoms';

const ExampleModal = ({ isOpen, handleCloseModal }) => {
  const screen = useSelector(state => state.app.screen)
  let width = '90%';
  let left = '50%';
  if (screen.width && screen.width < 768) {
      width = '348px';
      left = '206px';
  }
  return (
    <>
      <ReactModal
        isOpen={isOpen}
        contentLabel="onRequestClose Example"
        onRequestClose={handleCloseModal}
        style={{
          overlay: {
            background: 'rgba(95, 108, 113, 0.7)',
            zIndex: '20',
          },
          content: {
            width,
            left,
            borderRadius: '13px',
            top: '30%',
            right: 'initial',
            height: '328px',
            minWidth: '300px',
            maxWidth: '750px',
            transform: 'translateX(-50%)',
            position: 'relative',
          }
        }}
        >
        <Animation>
          <div>
              Modal Example
          </div>
        </Animation>
      </ReactModal>
      <style jsx>{`


      `}</style>
    </>
  );
}

export default ExampleModal;
