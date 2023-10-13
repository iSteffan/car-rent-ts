import { useState } from 'react';
import { CardContainer, Image } from './CarCard.styled';
import { CarData } from './components/CarData/CarData';
import { LearnMoreBtn } from './components/LearnMoreBtn/LearnMoreBtn';
import { AddToFavorBtn } from './components/AddToFavorBtn/AddToFavorBtn';
import { ModalWindow } from '../ModalWindow/ModalWindow';
// import Car from '../../img/empty.jpg';
import { ResponseData } from '../../App.types';

type Props = { item: ResponseData };

export const CarCard = ({ item }: Props) => {
  const [isTaskModalOpened, setIsTaskModalOpened] = useState(false);
  const handleToggle = () => setIsTaskModalOpened(prevState => !prevState);

  return (
    <li>
      <CardContainer>
        {/* {item.img.endsWith('.jpeg') || item.img.endsWith('.jpeg') ? (
          <Image src={item.img} alt={item.description} />
        ) : (
          <Image src={Car} alt={item.description} />
        )} */}
        <Image src={item.img} alt={item.description} />
        <AddToFavorBtn data={item} />
        <CarData data={item} />
        <LearnMoreBtn onClick={handleToggle} />
      </CardContainer>
      {isTaskModalOpened && (
        <ModalWindow data={item} handlerCloseModal={handleToggle}></ModalWindow>
      )}
    </li>
  );
};
