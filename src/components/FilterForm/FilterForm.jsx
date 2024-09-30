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
      {({ values }) => (
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
                  {[1, 2, 3, 4, 5].map(value => (
                    <label
                      key={value}
                      className={clsx(
                        css.box,
                        values.equipment.includes(value.toString()) &&
                          css.activeBox
                      )}
                    >
                      <Field
                        className={css.checkbox}
                        type="checkbox"
                        name="equipment"
                        value={value.toString()}
                      />
                    </label>
                  ))}
                </div>
              </div>
            )}
          />

          <p className={css.textBold}>Vehicle type</p>
          <hr className={css.string} />

          <div className={css.typeContainer}>
            <label className={css.box}>
              <Field
                className={css.checkbox}
                type="radio"
                name="type"
                value="One"
              />
              <div>
                <p>Van</p>
              </div>
            </label>
            <label className={css.box}>
              <Field
                className={css.checkbox}
                type="radio"
                name="type"
                value="Two"
              />
              <div>
                <p>Fully Integrated</p>
              </div>
            </label>
            <label className={css.box}>
              <Field
                className={css.checkbox}
                type="radio"
                name="type"
                value="Three"
              />
              <div>
                <p>Alcove</p>
              </div>
            </label>
          </div>
          <Button text="Search" />
        </Form>
      )}
    </Formik>
  );
}
