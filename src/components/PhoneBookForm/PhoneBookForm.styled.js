import { Field, Form } from 'formik';
import styled from 'styled-components';

export const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputName = styled.label`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 10px;
  }
`;

export const InputBox = styled(Field)`
  width: 300px;
  margin-top: 5px;
  padding: 5px;
  border: none;
  border-radius: 7px;
`;

export const SubmitBtn = styled.button`
  width: 140px;
  margin-top: 15px;
  padding: 4px;
  color: black;
  background-color: white;
  border: 2px solid green;
  border-radius: 5px;

  :hover,
  :focus {
    color: white;
    background-color: green;
  }
`;
