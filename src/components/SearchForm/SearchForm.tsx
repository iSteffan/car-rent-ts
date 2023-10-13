import { Formik } from 'formik';
import {
  Label,
  Form,
  Field,
  BrandContainer,
  PriceContainer,
  Datalist,
  Container,
  Btn,
  Fieldset,
  MileageBox,
  FieldMileageFrom,
  FieldMileageTo,
  ErrorMessageFieldFrom,
  ErrorMessageFieldTo,
  ErrorMessage,
} from './SearchForm.styled';
import * as Yup from 'yup';
import { SearchParams } from '../../App.types';

type Props = {
  onSave: (values: SearchParams) => void;
  data: string[] | unknown;
  priceRange: string[];
};

const FormSchema = Yup.object().shape({
  make: Yup.string().required('Required field!'),
  rentalPrice: Yup.number().positive('Must be > 0!').required('Required field!'),
  fromMileage: Yup.number()
    .positive('Must be > 0!')
    .test('is-less-than-toMileage', 'From must be less than To', function (fromMileage) {
      const toMileage = this.parent.toMileage;
      if (fromMileage !== undefined) {
        return fromMileage < toMileage;
      }
    })
    .required('Required field!'),
  toMileage: Yup.number()
    .positive('Must be > 0!')
    .test('is-greater-than-fromMileage', 'To must be greater than From', function (toMileage) {
      const fromMileage = this.parent.fromMileage;
      if (toMileage !== undefined) {
        return toMileage > fromMileage;
      }
    })
    .required('Required field!'),
});

export const SearchForm: React.FC<Props> = ({ onSave, data, priceRange }) => {
  return (
    <Formik
      initialValues={{
        make: '',
        rentalPrice: '',
        fromMileage: '',
        toMileage: '',
      }}
      validationSchema={FormSchema}
      onSubmit={(values, actions) => {
        onSave({ ...values });
        actions.resetForm();
      }}
    >
      <Form>
        <Container>
          <BrandContainer>
            <Label htmlFor="make">Car brand</Label>
            <Field name="make" id="make" list="carBrands" placeholder="Enter the text" />
            <ErrorMessage name="make" component="div" />
            <Datalist id="carBrands" style={{ width: '224px', height: '272px' }}>
              {Array.isArray(data)
                ? data.map(option => <option key={option} value={option} />)
                : null}
            </Datalist>
          </BrandContainer>
          <PriceContainer>
            <Label htmlFor="rentalPrice">Price/ 1 hour</Label>
            <Field name="rentalPrice" id="rentalPrice" list="priceRange" placeholder="To $" />
            <ErrorMessage name="rentalPrice" component="div" />
            <Datalist id="priceRange" style={{ width: '224px', height: '272px' }}>
              {priceRange.map(option => (
                <option key={option} value={option} />
              ))}
            </Datalist>
          </PriceContainer>
          <Fieldset>
            <Label htmlFor="fromMileage toMileage">Сar mileage / km</Label>
            <MileageBox>
              <FieldMileageFrom name="fromMileage" id="fromMileage" placeholder="From" />
              <ErrorMessageFieldFrom name="fromMileage" component="div" />
              <FieldMileageTo name="toMileage" id="toMileage" placeholder="To" />
              <ErrorMessageFieldTo name="toMileage" component="div" />
            </MileageBox>
          </Fieldset>
          <Btn type="submit">Search</Btn>
        </Container>
      </Form>
    </Formik>
  );
};
