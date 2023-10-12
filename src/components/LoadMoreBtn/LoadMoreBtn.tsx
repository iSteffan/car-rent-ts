import { Btn } from './LoadMoreBtn.styled';

type Props = { onClick: () => void };

export const LoadMoreBtn = ({ onClick }: Props) => {
  return <Btn onClick={onClick}>Load more</Btn>;
};
