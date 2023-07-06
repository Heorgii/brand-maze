import ImageGallery from 'react-image-gallery';
import { SlideContainer } from './Projects.styled';
import 'react-image-gallery/styles/css/image-gallery.css';
import Barber_img from '../../../images/projects/barber_project.webp';
import Animal_welfare_img from '../../../images/projects/animal_welfare_project.webp';
import Filmoteka_img from '../../../images/projects/filmoteka_project.webp';
import Ice_cream_img from '../../../images/projects/ice_cream_project.webp';
import { Container, Title } from 'components/baseStyles/CommonStyle.styled';

export const Project = () => {
  const images = [
    {
      original: Barber_img,
      thumbnail: Barber_img,
      description:"A convenient service for hairdressers, massage salons, which helps users make online reservations for the selected service",
      originalTitle:"A convenient service for hairdressers, massage salons, which helps users make online reservations for the selected service",
    },
    {
      original: Animal_welfare_img,
      thumbnail: Animal_welfare_img,
      description:"A project that helps to find a pet for youself or place a homeless animal in good hands",
      originalTitle:"A project that helps to find a pet for youself or place a homeless animal in good handsProject #2",
    },
    {
      original: Filmoteka_img,
      thumbnail: Filmoteka_img,
      description:"This site helps to choose movies or cartoons for viewing by the whole family and records the preferences of each individual member of the family",
      originalTitle:"This site helps to choose movies or cartoons for viewing by the whole family and records the preferences of each individual member of the family",
    },
    {
      original: Ice_cream_img,
      thumbnail: Ice_cream_img,
      description:"A project for ordering delicious and cold ice cream",
      originalTitle:"A project for ordering delicious and cold ice cream",
    },
  ];

  return (
    <Container>
      <Title>EXPLORE OUR WORKS</Title>
      <SlideContainer>
        <ImageGallery autoPlay={true} items={images} lazyLoad={true} description={images} slideDuration={700} originalTitle={images}/>;
      </SlideContainer>
    </Container>
  );
};
