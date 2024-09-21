import css from '../LinkButton/LinkButton.module.css';
import { Link } from 'react-router-dom';

export default function Button({ route, text, width }) {
  return (
    <Link className={css.link} to={route} style={{ width: width }}>
      {text}
    </Link>
  );
}
