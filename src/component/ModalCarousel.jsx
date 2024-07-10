import React, { useState } from 'react';
import '../styles/modal.css'; // Your CSS file for styling

const ModalCarousel = ({ images }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openModal = (index) => {
    setCurrentSlide(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide + images.length - 1) % images.length);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div className="gallery-item" key={image.id} onClick={() => openModal(index)}>
          <img src={image.url} alt={`Image ${index + 1}`} />
        </div>
      ))}
      
      {modalOpen && (
        <Modal
          closeModal={closeModal}
          currentSlide={currentSlide}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          totalSlides={images.length}
          imageUrl={images[currentSlide].url}
        />
      )}
    </div>
  );
};

const Modal = ({ closeModal, currentSlide, nextSlide, prevSlide, totalSlides, imageUrl }) => (
  <div className="modal">
    <span className="close" onClick={closeModal}>&times;</span>
    <div className="modal-content">
      <div className="carousel">
        <img src={imageUrl} alt={`Image ${currentSlide + 1}`} />
      </div>
      <a className="prev" onClick={prevSlide}>&#10094;</a>
      <a className="next" onClick={nextSlide}>&#10095;</a>
    </div>
  </div>
);

export default ModalCarousel;
