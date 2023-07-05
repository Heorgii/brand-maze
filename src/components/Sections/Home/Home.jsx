import {
  // Box,
  Title,
  List,
  ListItem,
  ListItemImg,
  ListItemText,
  ProductionText,
  CompList,
  CompListItem,
  ItemTitle,
  ItemNumber,
  ItemDiscr,
} from './Home.styled';
import homePage from '../../../images/homePage.png';
import { Container } from 'components/baseStyles/CommonStyle.styled';
import { useEffect, useState } from 'react';

export const Home = () => {
  const slides = [
    {
      id: 1,
      title: 'Logo',
      number: '01',
      text: ' It is a key element, helps to establish brand identity, enhances recognition and contributes to creating a positive impression.',
    },
    {
      id: 2,
      title: 'Web designs',
      number: '02',
      text: ' It is responsible for creating an attractive and user-friendly interface that affects the first impression of the user.',
    },
    {
      id: 3,
      title: 'Web development',
      number: '03',
      text: 'Allows you to create interactive and dynamic websites that attract customers, improve user interaction and achieve business goals.',
    },
    {
      id: 4,
      title: 'Instagram',
      number: '04',
      text: ' Allows you to effectively promote products or services, demonstrate a unique style, establish contacts with consumers and develop faithful to the brand.',
    },
    {
      id: 5,
      title: 'TikTok',
      number: '05',
      text: ' Allows you to create viral videos, maintain interactivity and communicate with consumers. To attract attention and create a positive image among a wide audience.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  //   }, 2000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  const nextSlide = () => {
    setCurrentSlide(prevSlide =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide(prevSlide =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <Container>
      <Title>BUILDING BETTER BRANDS</Title>

      <List>
        <ListItem>
          <ListItemImg src={homePage} alt="" />

          <ListItemText>
            We work tirelessly to develop long-term relationships with our
            partners, just as you strive to create strong bonds with the
            customers who purchase your products or use your services.
          </ListItemText>
        </ListItem>

        <ListItem>
          <ListItemText>
            We are creators of exceptional brands. This is the embodiment of our
            business. Under one virtual roof, we do incredible things to achieve
            this goal:<b> we build better brands. </b>
          </ListItemText>

          <ListItemImg src={homePage} alt="" />
        </ListItem>
      </List>

      <ListItemText>
        At Brand Maze - we carefully implement a well-designed process that
        helps us achieve excellence in everything we do.
      </ListItemText>
      <ProductionText>©brand maze productions</ProductionText>

      <CompList>
        <CompListItem>
          <ItemTitle>{slides[currentSlide].title}</ItemTitle>
          <ItemNumber>{slides[currentSlide].number}</ItemNumber>
          <ItemDiscr>{slides[currentSlide].text}</ItemDiscr>
        </CompListItem>
        <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
        {/* <CompListItem>
          <ItemTitle>Logo</ItemTitle>
          <pItemNumber>01</pItemNumber>
          <ItemDiscr>
            It is a key element, helps to establish brand identity, enhances
            recognition and contributes to creating a positive impression.
          </ItemDiscr>
        </CompListItem>

        <CompListItem>
          <ItemTitle>Web designs</ItemTitle>
          <ItemNumber>02</ItemNumber>
          <ItemDiscr>
            It is responsible for creating an attractive and user-friendly
            interface that affects the first impression of the user.
          </ItemDiscr>
        </CompListItem>

        <CompListItem>
          <ItemTitle>Web development</ItemTitle>
          <ItemNumber>03</ItemNumber>
          <ItemDiscr>
            Allows you to create interactive and dynamic websites that attract
            customers, improve user interaction and achieve business goals.
          </ItemDiscr>
        </CompListItem>

        <CompListItem>
          <ItemTitle>Instagram</ItemTitle>
          <ItemNumber>04</ItemNumber>
          <ItemDiscr>
            Allows you to effectively promote products or services, demonstrate
            a unique style, establish contacts with consumers and develop
            faithful to the brand.
          </ItemDiscr>
        </CompListItem>

        <CompListItem>
          <ItemTitle>TikTok</ItemTitle>
          <ItemNumber>05</ItemNumber>
          <ItemDiscr>
            Allows you to create viral videos, maintain interactivity and
            communicate with consumers. To attract attention and create a
            positive image among a wide audience.
          </ItemDiscr>
        </CompListItem> */}
      </CompList>
    </Container>
  );
};
