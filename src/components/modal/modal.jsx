import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Modal extends Component {
  shouldComponentUpdate ( nextProps, nextState ) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }
  
  render () {
    const { show, children, handleClose } = this.props;
    
    return (
      <React.Fragment>
        <div
          className="modal__overlay"
          style={{
            opacity: show ? ".5" : "0",
            visibility: show ? "visible" : "hidden"
          }}
          onClick={ handleClose }
        />
        <div
          className="modal"
          style={{
            opacity: show ? "1" : "0",
            visibility: show ? "visible" : "hidden"
          }}
        >
          <span className="modal__close" onClick={ handleClose }>
            <svg className="modal__img">
              <use href="#close" />
            </svg>
          </span>
          <div className="modal__dialog">
            { children }
          </div>
        </div>
      </React.Fragment>
    )
  }
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  handleClose: PropTypes.func.isRequired
};


export default Modal;