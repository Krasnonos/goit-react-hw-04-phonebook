import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
  FormBox,
  InputName,
  InputBox,
  SubmitBtn,
} from './PhoneBookForm.styled';

export const PhoneBookForm = ({ submitForm }) => {
  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={submitForm}>
      <FormBox>
        <InputName>
          Name
          <InputBox
            type="text"
            name="name"
            required
            placeholder="jason Statham"
          />
        </InputName>
        <InputName>
          Number
          <InputBox
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="+380991234567"
            required
          />
        </InputName>
        <SubmitBtn type="submit">Add constact</SubmitBtn>
      </FormBox>
    </Formik>
  );
};

PhoneBookForm.propTypes = {
  submitForm: PropTypes.func,
};
