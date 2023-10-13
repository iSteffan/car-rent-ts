import styled from 'styled-components';

export const MainDataBox = styled.div`
  margin-top: 14px;
  margin-bottom: 8px;

  font-size: 18px;
  line-height: 1.33;
  width: 100%;
  color: #121417;
`;

export const DetailsBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 4px;

  height: 40px;
  overflow: hidden;

  p {
    margin: 0;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
  }

  p + p::before {
    content: '';
    width: 6px;
    height: 16px;
    margin: 0 6px;
    border: 1px solid rgba(18, 20, 23, 0.1);
  }
  width: 100%;
`;

export const Description = styled.div`
  margin-top: 14px;
  margin-bottom: 24px;

  font-family: 'ManropeRegular';
  font-size: 14px;
  line-height: 1.42;
`;

export const Text = styled.div`
  margin-bottom: 8px;

  font-size: 14px;
  line-height: 1.57;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  list-style: none;
`;

export const ListItem = styled.li`
  padding: 7px 14px;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  border-radius: 35px;
  background: #f9f9f9;
`;

export const TextAccent = styled.span`
  color: #3470ff;
  font-family: 'ManropSemiBold';
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.24px;
`;

export const RentBtn = styled.a`
  margin-top: 24px;
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;

  font-family: 'ManropSemiBold';
  font-size: 14px;
  line-height: 1.42;
  text-decoration: none;
  color: white;
  border: none;
  border-radius: 12px;
  background: #3470ff;

  transition: background 250ms linear;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;
