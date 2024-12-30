import Icon from '../Icon/Icon';
import css from '../Loader/Loader.module.css';

export default function Loader() {
  return (
    <div className={css.container}>
      <Icon className={css.icon} width={40} height={40} id="icon-trailer" />
    </div>
  );
}
