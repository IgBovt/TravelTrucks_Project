import { Formik, Field, Form } from 'formik';
import Button from '../../shared/Button/Button';
import Icon from '../../shared/Icon/Icon';
import { cities } from '../../helpers/citiesList';
import { equipment } from '../../helpers/equipmentArray';
import clsx from 'clsx';
import css from '../FilterForm/FilterForm.module.css';
import { useDispatch } from 'react-redux';
import { getAllTrucks } from '../../redux/trucks/operations';

export default function FilterForm() {
  const initialValues = { location: '' };
  const dispatch = useDispatch();

  const handleSubmit = (value, { resetForm }) => {
    dispatch(getAllTrucks(value));
    console.log(value);
    resetForm();
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
            <Icon
              className={css.iconLocation}
              width="20"
              height="20"
              id="icon-map"
            />
          </label>

          <div className={css.equipmentContainer}>
            <p className={css.text}>Filters</p>
            <p className={css.textBold}>Vehicle equipment</p>
            <hr className={css.string} />
            <ul className={css.equipmentList}>
              {equipment.map(item => (
                <li key={item.title}>
                  <label
                    className={clsx(
                      css.box,
                      values[item.title] && css.activeBox
                    )}
                  >
                    <Field
                      className={css.checkbox}
                      type="checkbox"
                      id={item.title}
                      name={item.title}
                    />
                    <Icon
                      className={css.iconVcehicle}
                      width="32"
                      height="32"
                      id={item.icon}
                    />
                    <p>{item.title}</p>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* <FieldArray
            name="equipment"
            render={() => (
              <div className={css.equipmentContainer}>
                <p className={css.textBold}>Vehicle equipment</p>
                <hr className={css.string} />
                <div className={css.equipmentWrapper}>
                  {equipment.map(item => (
                    <label
                      key={item.value}
                      className={clsx(
                        css.box,
                        values.equipment.includes(item.value) && css.activeBox
                      )}
                    >
                      <Field
                        className={css.checkbox}
                        type="checkbox"
                        name="equipment"
                        value={item.value}
                      />
                      <Icon
                        className={css.iconVcehicle}
                        width="32"
                        height="32"
                        id={item.icon}
                      />
                      <p>{item.title}</p>
                    </label>
                  ))}
                </div>
              </div>
            )}
          /> */}
          {/* <p className={css.textBold}>Vehicle type</p>
          <hr className={css.string} />
          <div className={css.typeContainer}>
            <label
              className={clsx(
                css.box,
                values.type.includes('One') && css.activeBox
              )}
            >
              <Field
                className={css.checkbox}
                type="checkbox"
                name="type"
                value="One"
              />
              <Icon
                className={css.iconVcehicle}
                width="32"
                height="32"
                id="van_type"
              />

              <div>
                <p>Van</p>
              </div>
            </label>
            <label
              className={clsx(
                css.box,
                values.type.includes('Two') && css.activeBox
              )}
            >
              <Field
                className={css.checkbox}
                type="checkbox"
                name="type"
                value="Two"
              />
              <Icon
                className={css.iconVcehicle}
                width="32"
                height="32"
                id="icon-fuel"
              />
              <div>
                <p className={css.fueltext}>Fully Integrated</p>
              </div>
            </label>
            <label
              className={clsx(
                css.box,
                values.type.includes('Three') && css.activeBox
              )}
            >
              <Field
                className={css.checkbox}
                type="checkbox"
                name="type"
                value="Three"
              />
              <Icon
                className={css.iconVcehicle}
                width="32"
                height="32"
                id="van_alcove"
              />
              <div>
                <p>Alcove</p>
              </div>
            </label>
          </div> */}
          <Button text="Search" />
        </Form>
      )}
    </Formik>
  );
}
