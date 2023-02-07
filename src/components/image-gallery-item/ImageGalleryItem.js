import React, { Component } from 'react';
import Modal from '../modal/Modal'
import css from './image-gallery.module.css'

class ImageGalleryItem extends Component {
    state = {
        modalOpen:false,
    };

    onClick = () => { 
        this.setState({ modalOpen: true, })
    }

    render() {
        const { webformatURL, largeImageURL } = this.props.image; 
        
    return (<div>
        <li onClick={this.onClick} className={css.ImageGalleryItem}>
            <img src={webformatURL} alt="img" className={css.ImageGalleryItem_image } />
        </li>
        {this.state.modalOpen && (<Modal onClose={this.onClick} largeImageURL={largeImageURL} />)}
        </div>
    );
  }
}

export default ImageGalleryItem; 
