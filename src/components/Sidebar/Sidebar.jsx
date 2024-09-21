import FilterForm from '../FilterForm/FilterForm';
import css from '../Sidebar/Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={css.container}>
      <FilterForm />
    </div>
  );
}
