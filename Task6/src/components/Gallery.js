// src/components/Gallery.js
import React, { useState } from 'react';
import Image from './Image';
import Modal from './Modal';
import './Gallery.css';

const images = [
  'aadab.png',
  'about_platform65.jpg',
  "aroma.jpg",
  'barbeque1.jpg',
  'imag4.jpeg',
  'images.jpeg',
  'img1.jpg',
  'img3.jpeg',
  'img5.avif',
  // Add more image URLs or paths here
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <Image key={index} src={image} onClick={() => openModal(image)} />
      ))}
      {selectedImage && (
        <Modal image={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default Gallery;
