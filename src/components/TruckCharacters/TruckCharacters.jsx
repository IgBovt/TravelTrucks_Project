import { useState } from 'react';
import css from '../TruckCharacters/TruckCharacters.module.css';
import Features from '../Features/Features';

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
      <div>
        <div>
          <Features />
        </div>
        <div></div>
      </div>
    </section>
  );
}
