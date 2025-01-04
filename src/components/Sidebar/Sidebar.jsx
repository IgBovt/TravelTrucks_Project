import FilterForm from '../FilterForm/FilterForm';
import css from '../Sidebar/Sidebar.module.css';
import clsx from 'clsx';

export default function Sidebar({ isOpen, openSidebar }) {
  return (
    <aside className={clsx(css.container, isOpen && css.isOpen)}>
      <FilterForm openSidebar={openSidebar} />
    </aside>
  );
}
