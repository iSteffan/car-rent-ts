import {
  MainDataBox,
  DetailsBox,
  Description,
  Text,
  List,
  ListItem,
  TextAccent,
  RentBtn,
} from './CarDataModal.styled';
import { extractCity, extractCountry } from '../../../../utils/extractor';

export const CarDataModal = ({ data }) => {
  const {
    id,
    make,
    model,
    year,
    rentalPrice,
    address,
    // rentalCompany,
    type,
    mileage,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
  } = data;

  const accessoriesAndFunctionalities = [...accessories, ...functionalities];
  const city = extractCity(address);
  const country = extractCountry(address);
  const milesFormat = Number(mileage).toLocaleString('en-US');
  const priceFormat = rentalPrice.slice(1).trim() + '$';

  return (
    <>
      <MainDataBox>
        <p>
          {make}
          <span style={{ color: '#3470FF' }}> {model}</span>, {year}
        </p>
      </MainDataBox>

      <DetailsBox>
        <p>{city}</p>
        <p>{country}</p>
        <p>id: {id}</p>
        <p>Year: {year}</p>
        <p>Type: {type}</p>
        <p>Fuel Consumption: {fuelConsumption}</p>
        <p>Engine Size: {engineSize}</p>
      </DetailsBox>

      <Description>
        <p>{description}</p>
      </Description>

      <div>
        <Text>Accessories and functionalities:</Text>
        <DetailsBox>
          {accessoriesAndFunctionalities.map(item => (
            <p key={item}>{item}</p>
          ))}
        </DetailsBox>
      </div>

      <div
        style={{
          marginTop: '24px',
        }}
      >
        <Text>Rental Conditions:</Text>
        <List>
          <ListItem>
            Minimum age: <TextAccent>25</TextAccent>
          </ListItem>
          <ListItem>Valid driver’s license</ListItem>
          <ListItem>Security deposite required</ListItem>
          <ListItem>
            Mileage: <TextAccent>{milesFormat}</TextAccent>
          </ListItem>
          <ListItem>
            Price: <TextAccent>{priceFormat}</TextAccent>
          </ListItem>
        </List>
      </div>
      <RentBtn href="tel:+380730000000">Rental car</RentBtn>
    </>
  );
};
