import { Formik, Field, Form, FieldArray } from 'formik';
import Button from '../../shared/Button/Button';
import { cities } from '../../helpers/citiesList';
import clsx from 'clsx';
import css from '../FilterForm/FilterForm.module.css';

export default function FilterForm() {
  const initialValues = { location: '', equipment: [], type: '' };
  const handleSubmit = value => {
    console.log(value);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <datalist id="city-options">
          {cities.map((city, index) => (
            <option key={index} value={city} />
          ))}
        </datalist>
        <label className={css.locationLabel}>
          Location
          <Field
            className={css.locationInput}
            name="location"
            placeholder="Kyiv, Ukraine"
            list="city-options"
          />
        </label>
        <p className={css.text}>Filters</p>
        <FieldArray
          name="equipment"
          render={() => (
            <div className={css.equipmentContainer}>
              <p className={css.textBold}>Vehicle equipment</p>
              <hr className={css.string} />
              <div className={css.equipmentWrapper}>
                <label className={css.box}>
                  <Field
                    className={css.checkbox}
                    type="checkbox"
                    name="equipment"
                    value={'1'}
                  />
                </label>
                <label className={css.box}>
                  <Field
                    className={css.checkbox}
                    type="checkbox"
                    name="equipment"
                    value={'2'}
                  />
                </label>
                <label className={css.box}>
                  <Field
                    className={css.checkbox}
                    type="checkbox"
                    name="equipment"
                    value={'3'}
                  />
                </label>
                <label className={css.box}>
                  <Field
                    className={css.checkbox}
                    type="checkbox"
                    name="equipment"
                    value={'4'}
                  />
                </label>
                <label className={css.box}>
                  <Field
                    className={css.checkbox}
                    type="checkbox"
                    name="equipment"
                    value={'5'}
                  />
                </label>
              </div>
            </div>
          )}
        />
        <div id="type">Picked</div>
        <div role="group" aria-labelledby="my-radio-group">
          <label>
            <Field type="radio" name="type" value="One" />
            One
          </label>
          <label>
            <Field type="radio" name="type" value="Two" />
            Two
          </label>
          <label>
            <Field type="radio" name="type" value="Three" />
            Three
          </label>
        </div>
        <Button text="Search" />
      </Form>
    </Formik>
  );
}
