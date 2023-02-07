import React from 'react';
import ImageGalleryItem from '../image-gallery-item/ImageGalleryItem'
import css from './image-gallery.module.css'

const ImageGallery = ({ images }) => {
    return (
        <ul className={css.ImageGallery}>
            {images.map(img => { return <ImageGalleryItem key={img.id} image={img} /> })}
        </ul>
    )

}


export default ImageGallery; 