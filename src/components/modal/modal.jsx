import React, { Component } from 'react';


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
          style={{ opacity: show ? ".5" : "0", display: show ? "inline-block" : "none" }}
          onClick={ handleClose }
        />
        <div
          className="modal"
          style={{
            opacity: show ? "1" : "0",
            overflowY: show ? "auto" : "0"
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


export default Modal;