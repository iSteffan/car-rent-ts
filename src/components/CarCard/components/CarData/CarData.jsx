import { Box, MainDataBox, DetailsBox } from './CarData.styled';
import { extractCity, extractCountry } from '../../../../utils/extractor';

export const CarData = ({ data }) => {
  const {
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    functionalities,
  } = data;

  const city = extractCity(address);
  const country = extractCountry(address);

  return (
    <Box>
      <MainDataBox>
        <p>
          {make}
          <span style={{ color: '#3470FF' }}> {model}</span>, {year}
        </p>
        <p>{rentalPrice}</p>
      </MainDataBox>
      <DetailsBox>
        <p>{city}</p>
        <p>{country}</p>
        <p>{rentalCompany}</p>
        <p>{type}</p>
        <p>{model}</p>
        <p>{mileage}</p>
        <p>{functionalities[0]}</p>
      </DetailsBox>
    </Box>
  );
};
