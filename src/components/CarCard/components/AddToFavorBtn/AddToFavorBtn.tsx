import { Icon, Btn, ActiveIcon } from './AddToFavorBtn.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites, addFavor, deleteFavor } from '../../../../redux/favor/favoritesSlice';
import { checkFavorBtnStatus } from '../../../../utils/checkFavorBtnStatus';
import { ResponseData } from '../../../../App.types';

type Props = { data: ResponseData };

export const AddToFavorBtn = ({ data }: Props) => {
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
