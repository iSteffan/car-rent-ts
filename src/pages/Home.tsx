import { Container, HeroContainer, Title, Text, List, Circle, ListItem, Line } from './Home.styled';

const Home = () => {
  return (
    <Container>
      <HeroContainer>
        <Title>Оренда авто в Україні</Title>
        <Text>Прокат та оренда авто як з водієм так і без нього</Text>
        <Line></Line>
        <List>
          <ListItem>
            <Circle>1</Circle> Завжди в наявності великий автопарк
          </ListItem>
          <ListItem>
            <Circle>2</Circle> Доставка авто до вашої геолокації
          </ListItem>
          <ListItem>
            <Circle>3</Circle> Знижки постійним клієнтам
          </ListItem>
          <ListItem>
            <Circle>4</Circle> Любий вид оплати
          </ListItem>
          <ListItem>
            <Circle>5</Circle> Вигідні ціни
          </ListItem>
        </List>
      </HeroContainer>
    </Container>
  );
};

export default Home;
