import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export const Modal = ({ ...props }) =>
  props.isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay">
            <div className="modal-wrapper">
              <div className="modal">
                <div className="modal-header">
                  <button
                    type="button"
                    className="modal-close-button"
                    onClick={props.hide}
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">{props.title}</div>
              </div>
              <div className="modal-body">{props.children}</div>
            </div>
          </div>

          <style>{`
            .modal-overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              z-index: 1040;
              background-color: rgba(0, 0, 0, 0.5);
            }

            .modal-wrapper {
              position: fixed;
              top: 0;
              left: 0;
              z-index: 1050;
              width: 100%;
              height: 100%;
              overflow-x: hidden;
              overflow-y: auto;
              outline: 0;
              display: flex;
              align-items: center;
            }

            .modal {
              z-index: 100;
              background: #fff;
              position: relative;
              margin: auto;
              border-radius: 5px;
              max-width: 500px;
              width: 80%;
              padding: 1rem;
            }

            .modal-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }

            .modal-close-button {
              font-size: 1.4rem;
              font-weight: 700;
              color: #000;
              cursor: pointer;
              border: none;
              background: transparent;
            }
          `}</style>
        </>,
        document.body
      )
    : null;

Modal.prototypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  title: PropTypes.string,
};

