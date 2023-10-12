import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAdverts,
  fetchAdvertsPerPage,
  fetchAdvertsAmount,
} from '../redux/advertOperations';
import {
  selectAdverts,
  selectAmount,
  selectIsLoading,
  selectError,
} from '../redux/advertSlice';
import { CarCard } from '../components/CarCard/CarCard';
import { List, Container } from './Catalog.styled';
import { LoadMoreBtn } from '../components/LoadMoreBtn/LoadMoreBtn';
import { Loader } from '../components/Loader/Loader';
import { SearchForm } from '../components/SearchForm/SearchForm';
import { findUniqueBrand } from '../utils/findUniqueBrand';
import { extractRentalPricesInRange } from '../utils/extractRentalPricesInRange';
import { searchFilter } from '../utils/searchFilter';

const Catalog = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(2);
  const [filteredItems, setFilteredItems] = useState(null);

  useEffect(() => {
    dispatch(fetchAdverts());
    dispatch(fetchAdvertsAmount());
  }, [dispatch]);

  const onLoadMoreClick = () => {
    dispatch(fetchAdvertsPerPage(page));
    setPage(prevPage => prevPage + 1);
  };

  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const items = useSelector(selectAdverts);
  const itemsAmount = useSelector(selectAmount);

  const carModels = findUniqueBrand(itemsAmount);
  const rentalPriceRange = extractRentalPricesInRange(itemsAmount);

  const handleSearch = searchParam => {
    const filteredCars = searchFilter(itemsAmount, searchParam);
    setFilteredItems(filteredCars);
  };

  const renderItems = filteredItems ? filteredItems : items;

  return (
    <Container>
      <SearchForm
        data={carModels}
        priceRange={rentalPriceRange}
        onSave={handleSearch}
      />

      {isLoading && (
        <div style={{ marginTop: '200px' }}>
          <Loader />
        </div>
      )}

      {filteredItems !== null && filteredItems.length === 0 ? (
        <p style={{ textAlign: 'center' }}>
          Your search parameters did not match any available cars.
        </p>
      ) : (
        <List>
          {renderItems.map(item => (
            <CarCard key={item.id} item={item} />
          ))}
        </List>
      )}

      {!filteredItems && itemsAmount.length - items.length > 0 && (
        <LoadMoreBtn onClick={onLoadMoreClick} />
      )}

      {error && <p>Oops, something wrong is going on...</p>}
    </Container>
  );
};

export default Catalog;
