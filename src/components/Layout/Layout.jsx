import Header from '../Header/Header';
import css from '../Layout/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <Header />
      {children}
    </div>
  );
}
