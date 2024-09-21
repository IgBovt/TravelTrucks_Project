import { Formik, Field, Form, FieldArray } from 'formik';
import Button from '../../shared/Button/Button';
import css from '../FilterForm/FilterForm.module.css';

export default function FilterForm() {
  const initialValues = { location: '', equipment: [], type: '' };
  const handleSubmit = value => {
    console.log(value);
  };

  const equipmentOptions = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
  ];

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label className={css.locationLabel}>
          Location
          <Field
            className={css.locationInput}
            name="location"
            placeholder="Kyiv, Ukraine"
          />
        </label>

        <p className={css.text}>Filters</p>

        <FieldArray
          name="equipment"
          render={() => (
            <div>
              <label>Vehicle equipment</label>
              {equipmentOptions.map((equipment, index) => (
                <Field
                  key={index}
                  type="checkbox"
                  name="equipment"
                  value={equipment.value.toString()}
                />
              ))}
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
