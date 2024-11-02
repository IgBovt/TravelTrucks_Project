import { useSelector } from 'react-redux';
import css from '../Features/Features.module.css';
import { selectTruck } from '../../redux/trucks/selectors';
import OptionsItem from '../../shared/OptionsItem/OptionsItem';

export default function Features() {
  const truck = useSelector(selectTruck);

  return (
    truck && (
      <div className={css.container}>
        <ul className={css.featuresList}>
          {truck.AC && <OptionsItem icon="icon-wind" text="AC" />}
          {truck.TV && <OptionsItem icon="icon-tv" text="TV" />}
          {truck.bathroom && (
            <OptionsItem icon="icon-ph_shower" text="Bathroom" />
          )}
          <OptionsItem
            icon={'icon-fuel-pump'}
            text={
              truck.engine.charAt(0).toUpperCase() + truck.engine.slice(1) ||
              'Unknow'
            }
          />
          <OptionsItem
            icon={'van_alcove'}
            text={
              truck.form.charAt(0).toUpperCase() + truck.form.slice(1) ||
              'Unknow'
            }
          />
          {truck.gas && <OptionsItem icon="icon-fire" text="Gas" />}
          {truck.kitchen && (
            <OptionsItem icon={'icon-cup-hot'} text={'Kitchen'} />
          )}
          {truck.microwave && (
            <OptionsItem icon="icon-microwave" text="Microwave" />
          )}
          {truck.radio && <OptionsItem icon="icon-ui-radios" text="Radio" />}
          {truck.refrigerator && (
            <OptionsItem icon="icon-refrigerator" text="Refrigerator" />
          )}
          <OptionsItem
            icon={'icon-diagram'}
            text={
              truck.transmission.charAt(0).toUpperCase() +
                truck.transmission.slice(1) || 'Unknow'
            }
          />
          {truck.water && <OptionsItem icon={'water'} text={'Water'} />}
        </ul>
        <div></div>
      </div>
    )
  );
}
