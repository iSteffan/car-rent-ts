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
  ErrorMessage,
} from './SearchForm.styled';
import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
  make: Yup.string().required('Required field!'),
  rentalPrice: Yup.number()
    .positive('Must be > 0!')
    .required('Required field!'),
  fromMileage: Yup.number()
    .positive('Must be > 0!')
    .test(
      'is-less-than-toMileage',
      'From must be less than To',
      function (fromMileage) {
        const toMileage = this.parent.toMileage;
        return fromMileage < toMileage;
      }
    )
    .required('Required field!'),
  toMileage: Yup.number()
    .positive('Must be > 0!')
    .test(
      'is-greater-than-fromMileage',
      'To must be greater than From',
      function (toMileage) {
        const fromMileage = this.parent.fromMileage;
        return toMileage > fromMileage;
      }
    )
    .required('Required field!'),
});

export const SearchForm = ({ onSave, data, priceRange }) => {
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
            <Field
              name="make"
              id="make"
              list="carBrands"
              placeholder="Enter the text"
            />
            <ErrorMessage name="make" component="div" />
            <Datalist
              id="carBrands"
              style={{ width: '224px', height: '272px' }}
            >
              {data.map(option => (
                <option key={option} value={option} />
              ))}
            </Datalist>
          </BrandContainer>
          <PriceContainer>
            <Label htmlFor="rentalPrice">Price/ 1 hour</Label>
            <Field
              name="rentalPrice"
              id="rentalPrice"
              list="priceRange"
              placeholder="To $"
            />
            <ErrorMessage name="rentalPrice" component="div" />
            <Datalist
              id="priceRange"
              style={{ width: '224px', height: '272px' }}
            >
              {priceRange.map(option => (
                <option key={option} value={option} />
              ))}
            </Datalist>
          </PriceContainer>
          <Fieldset>
            <Label htmlFor="fromMileage toMileage">Сar mileage / km</Label>
            <MileageBox>
              <FieldMileageFrom
                name="fromMileage"
                id="fromMileage"
                placeholder="From"
              />
              <ErrorMessage
                name="fromMileage"
                component="div"
                style={{ top: '49px', width: '160px' }}
              />
              <FieldMileageTo
                name="toMileage"
                id="toMileage"
                placeholder="To"
              />
              <ErrorMessage
                name="toMileage"
                component="div"
                style={{ top: '49px', left: '160px' }}
              />
            </MileageBox>
          </Fieldset>
          <Btn type="submit">Search</Btn>
        </Container>
      </Form>
    </Formik>
  );
};
