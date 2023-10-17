import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 150px;
  padding: 20px 20px;
`;

export const HeroContainer = styled.div`
  margin-left: auto;
  margin-right: auto;

  width: 100%;
  height: 800px;
  background-image: url('https://res.cloudinary.com/dfbge4xuq/image/upload/v1697528505/bg-i_xmdcnp.jpg');
  background-position: 50% 50%;
`;

export const Title = styled.h1`
  padding-top: 170px;

  color: white;
  text-align: center;
  font-family: Unbounded;
  font-size: 89px;
  font-style: normal;
  font-weight: 700;
  line-height: 95px;
`;

export const Text = styled.p`
  padding-top: 40px;

  color: white;
  text-align: center;
  font-family: PP Pangram Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;

  max-width: 1200px;
  list-style: none;
`;

export const ListItem = styled.li`
  color: white;
  font-family: PP Pangram Sans;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
`;

export const Circle = styled.span`
  display: inline-block;

  text-align: center;
  width: 26px;
  height: 26px;
  color: black;
  border-radius: 50%;
  background-color: white;
`;

export const Line = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 120px;
  margin-bottom: 70px;

  max-width: 1320px;
  height: 2px;

  background: rgba(255, 255, 255, 0.2);
`;
