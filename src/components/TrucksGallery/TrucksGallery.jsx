import { useSelector } from 'react-redux';
import { selectTruck } from '../../redux/trucks/selectors';
import css from '../TrucksGallery/TrucksGallery.module.css';
import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import ImageModal from '../ImagesModal/ImagesModal';

export default function TrucksGallery() {
  const truck = useSelector(selectTruck);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  function openModal(image) {
    setSelectedImage(image);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setSelectedImage(null);
  }

  return (
    <>
      {truck && (
        <section>
          <ul className={css.list}>
            {truck.gallery.map(img => (
              <li
                className={css.item}
                key={nanoid()}
                onClick={() => openModal(img.thumb)}
              >
                <img className={css.image} src={img.thumb} alt="Truck image" />
              </li>
            ))}
          </ul>
          <p className={css.text}>{truck.description}</p>
        </section>
      )}
      {truck && truck.gallery && (
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          gallery={truck.gallery || []}
        />
      )}
    </>
  );
}
