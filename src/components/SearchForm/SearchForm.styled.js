import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikInput,
  ErrorMessage as FormikErrorMessage,
} from 'formik';

export const ErrorMessage = styled(FormikErrorMessage)`
  position: absolute;
  top: 75px;
  left: 0;
  font-size: 12px;
  color: red;
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 18px;
`;

export const Label = styled.label`
  margin-bottom: 8px;

  color: #8a8a89;
  font-size: 14px;
  line-height: 1.28;
`;

export const Field = styled(FormikInput)`
  padding: 14px 18px;

  font-size: 18px;
  line-height: 1.11;
  border: none;
  border-radius: 14px;
  background: #f7f7fb;

  &::placeholder {
    color: #121417;
  }
`;

export const FieldMileageFrom = styled(FormikInput)`
  padding: 14px 24px;

  width: 160px;
  font-size: 18px;
  line-height: 1.11;
  border: none;
  border-bottom-left-radius: 14px;
  border-top-left-radius: 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);

  background: #f7f7fb;

  &::placeholder {
    color: #121417;
  }
`;

export const FieldMileageTo = styled(FormikInput)`
  padding: 14px 24px;

  width: 160px;
  font-size: 18px;
  line-height: 1.11;
  border: none;
  border-bottom-right-radius: 14px;
  border-top-right-radius: 14px;
  background: #f7f7fb;

  &::placeholder {
    color: #121417;
  }
`;

export const Form = styled(FormikForm)`
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;

  width: 858px;
`;

export const BrandContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 224px;
`;

export const PriceContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 125px;
`;

export const Datalist = styled.datalist`
  width: 224px;
  height: 272px;
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background: #fff;
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
`;

export const Btn = styled.button`
  padding: 14px 44px;

  height: 48px;
  color: white;
  font-family: 'ManropSemiBold';
  font-size: 14px;
  line-height: 1.42;
  border: none;
  border-radius: 12px;
  background: #3470ff;

  transition: background 250ms linear;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;

export const Fieldset = styled.fieldset`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  border: none;
`;

export const MileageBox = styled.div`
  position: relative;
  display: flex;

  width: 320px;
`;
