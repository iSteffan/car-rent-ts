import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/favor/favoritesSlice';
import { CarCard } from '../components/CarCard/CarCard';
import { List, Container } from './Catalog.styled';
import { EmptyText } from './Favorites.styled';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <Container>
      {favorites.length > 0 ? (
        <List>
          {favorites.map(item => (
            <CarCard key={item.id} item={item} />
          ))}
        </List>
      ) : (
        <EmptyText>Your favorite list is empty</EmptyText>
      )}
    </Container>
  );
};

export default Favorites;
