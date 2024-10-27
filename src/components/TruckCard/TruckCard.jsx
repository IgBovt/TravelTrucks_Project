import LinkButton from '../../shared/LinkButton/LinkButton';
import Icon from '../../shared/Icon/Icon';
import css from '../TruckCard/TruckCard.module.css';

export default function TruckCard() {
  return (
    <div className={css.container}>
      <img className={css.img} src="/public/images/Pic.png" alt="TruckPhoto" />
      <div className={css.infoField}>
        <div className={css.textInfo}>
          <div className={css.titleContainer}>
            <div className={css.titleWrapper}>
              <h3 className={css.title}>Mavericks</h3>
              <div className={css.priceContainer}>
                <p className={css.price}>€8000.00</p>
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
                <p>4.4(2 Reviews)</p>
              </div>
              <div className={css.locationContainer}>
                <Icon
                  className={css.iconLocation}
                  width="16"
                  height="16"
                  id="icon-map"
                />

                <p>Kyiv, Ukraine</p>
              </div>
            </div>
          </div>
          <p className={css.text}>
            Embrace simplicity and freedom with the Mavericks panel
            truck...Embrace simplicity and freedom with the Mavericks panel
            truck...
          </p>
          <ul className={css.list}>
            <li className={css.listItem}>
              <Icon
                className={css.iconItem}
                width="20"
                height="20"
                id="icon-diagram"
              />

              <p>Automatic</p>
            </li>
            <li className={css.listItem}>
              {' '}
              <Icon
                className={css.iconItem}
                width="20"
                height="20"
                id="icon-diagram"
              />
              <p>Automatic</p>
            </li>
            <li className={css.listItem}>
              <Icon
                className={css.iconItem}
                width="20"
                height="20"
                id="icon-diagram"
              />
              <p>Automatic</p>
            </li>
            <li className={css.listItem}>
              <Icon
                className={css.iconItem}
                width="20"
                height="20"
                id="icon-diagram"
              />
              <p>Automatic</p>
            </li>
            <li className={css.listItem}>
              <Icon
                className={css.iconItem}
                width="20"
                height="20"
                id="icon-diagram"
              />
              <p>Automatic</p>
            </li>
          </ul>
        </div>
        <LinkButton route="/catalog/:id" text="Show more" width={166} />
      </div>
    </div>
  );
}
