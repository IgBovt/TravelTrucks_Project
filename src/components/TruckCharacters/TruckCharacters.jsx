import { useState } from 'react';
import css from '../TruckCharacters/TruckCharacters.module.css';
import Features from '../Features/Features';
import BookForm from '../../shared/BookForm/BookForm';

export default function TruckCharacters() {
  const [activeButton, setActiveButton] = useState('Features');

  const handleButtonClick = buttonName => {
    setActiveButton(buttonName);
  };

  return (
    <section>
      <div className={css.btnContainer}>
        <button
          className={`${css.btn} ${
            activeButton === 'Features' ? css.active : ''
          }`}
          type="button"
          onClick={() => handleButtonClick('Features')}
        >
          Features
        </button>
        <button
          className={`${css.btn} ${
            activeButton === 'Reviews' ? css.active : ''
          }`}
          type="button"
          onClick={() => handleButtonClick('Reviews')}
        >
          Reviews
        </button>
      </div>
      <hr />
      <div className={css.container}>
        <div
          className={`${css.featuresContainer} ${
            activeButton === 'Features' ? css.showed : ''
          }`}
        >
          <Features />
          <BookForm />
        </div>
        <div></div>
      </div>
    </section>
  );
}
