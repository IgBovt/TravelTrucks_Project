import { Formik, Field, Form } from 'formik';
import css from '../BookForm/BookForm.module.css';
import Button from '../Button/Button';

export default function BookForm() {
  const handleSubmit = (value, { resetForm }) => {
    console.log(value);
    resetForm();
  };

  return (
    <div className={css.formContainer}>
      <h6 className={css.title}>Book your campervan now</h6>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={{ name: '', email: '', date: '', coment: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            name="name"
            placeholder="Name*"
            required
          />

          <Field
            className={css.input}
            type="email"
            name="email"
            placeholder="Email*"
            required
          />

          <Field className={css.input} type="date" name="date" required />

          <Field
            className={css.textarea}
            as="textarea"
            name="coment"
            placeholder="Comment*"
          />

          <div className={css.btn}>
            <Button text="Send" />
          </div>
        </Form>
      </Formik>
    </div>
  );
}
