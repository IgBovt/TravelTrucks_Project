import FilterForm from '../FilterForm/FilterForm';
import css from '../Sidebar/Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={css.container}>
      <FilterForm />
    </aside>
  );
}
