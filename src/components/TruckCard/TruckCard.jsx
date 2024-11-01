import LinkButton from '../../shared/LinkButton/LinkButton';
import Icon from '../../shared/Icon/Icon';
import OptionsItem from '../../shared/OptionsItem/OptionsItem';
import css from '../TruckCard/TruckCard.module.css';

export default function TruckCard({
  name,
  price,
  description,
  gallery,
  location,
  rating,
  reviews,
  transmission,
  engine,
  kitchen,
  AC,
  water,
  TV,
  bathroom,
  gas,
  id,
}) {
  return (
    <div className={css.container}>
      <img className={css.img} src={gallery} alt="TruckPhoto" />
      <div className={css.infoField}>
        <div className={css.textInfo}>
          <div className={css.titleContainer}>
            <div className={css.titleWrapper}>
              <h3 className={css.title}>{name}</h3>
              <div className={css.priceContainer}>
                <p className={css.price}>€ {price}.00</p>
                <button className={css.heartBtn}>
                  <Icon
                    className={css.iconHeart}
                    width="24"
                    height="22"
                    id="icon-heart"
                  />
                </button>
              </div>
            </div>
            <div className={css.ratingWrapper}>
              <div className={css.ratingContainer}>
                <Icon
                  className={css.iconRating}
                  width="16"
                  height="16"
                  id="icon-Rating"
                />
                <p>
                  {rating}({reviews} Reviews)
                </p>
              </div>
              <div className={css.locationContainer}>
                <Icon
                  className={css.iconLocation}
                  width="16"
                  height="16"
                  id="icon-map"
                />

                <p>{location}</p>
              </div>
            </div>
          </div>
          <p className={css.text}>{description}</p>
          <ul className={css.list}>
            <OptionsItem
              icon={'icon-diagram'}
              text={
                transmission.charAt(0).toUpperCase() + transmission.slice(1) ||
                'Unknow'
              }
            />
            <OptionsItem
              icon={'icon-fuel-pump'}
              text={
                engine.charAt(0).toUpperCase() + engine.slice(1) || 'Unknow'
              }
            />
            {kitchen && <OptionsItem icon={'icon-cup-hot'} text={'Kitchen'} />}
            {AC && <OptionsItem icon={'icon-wind'} text={'AC'} />}
            {water && <OptionsItem icon={'water'} text={'Water'} />}
            {TV && <OptionsItem icon={'icon-tv'} text={'TV'} />}
            {bathroom && (
              <OptionsItem icon={'icon-ph_shower'} text={'Bathroom'} />
            )}
            {gas && (
              <OptionsItem
                className={css.icon}
                icon={'icon-fire'}
                text={'Gas'}
              />
            )}
          </ul>
        </div>
        <LinkButton route={`/catalog/${id}`} text="Show more" width={166} />
      </div>
    </div>
  );
}
