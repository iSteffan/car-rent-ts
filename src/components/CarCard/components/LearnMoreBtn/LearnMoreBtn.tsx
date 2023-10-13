import { Btn } from './LearnMoreBtn.styled';

type Props = { onClick: () => void };

export const LearnMoreBtn = ({ onClick }: Props) => {
  return <Btn onClick={onClick}>Learn more</Btn>;
};
