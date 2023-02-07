import React, { Component } from 'react';
import css from './modal.module.css'

class Modal extends Component {

    componentDidMount() { 
        window.addEventListener('keydown', this.onCloseEsc)
    }

    componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseEsc);
  }


    onCloseEsc = evt => { 
        if (evt.code === 'escape') { 
            this.props.onClose();
        }
    }



    render() {
        const {largeImageURL } = this.props;
    return (
        <div className={css.overlay}>
            <div className={css.modal}>
          <img src={largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}


export default Modal; 