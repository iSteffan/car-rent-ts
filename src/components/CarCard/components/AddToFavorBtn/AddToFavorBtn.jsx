import { Icon, Btn, ActiveIcon } from './AddToFavorBtn.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFavorites,
  addFavor,
  deleteFavor,
} from '../../../../redux/favor/favoritesSlice';
import { checkFavorBtnStatus } from '../../../../utils/checkFavorBtnStatus';

export const AddToFavorBtn = ({ data }) => {
  const dispatch = useDispatch();

  const favorite = useSelector(selectFavorites);

  const isFavorite = checkFavorBtnStatus(favorite, data);

  return (
    <>
      {!isFavorite ? (
        <Btn onClick={() => dispatch(addFavor(data))}>
          <Icon />
        </Btn>
      ) : (
        <Btn onClick={() => dispatch(deleteFavor(data))}>
          <ActiveIcon />
        </Btn>
      )}
    </>
  );
};

// const array = [
//   { id: 1, head: 11 },
//   { id: 2, head: 22 },
//   { id: 3, head: 33 },
// ];

// const obj = { id: 2, head: 22 };
