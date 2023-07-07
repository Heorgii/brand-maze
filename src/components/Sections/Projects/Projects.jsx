import ImageGallery from 'react-image-gallery';
import { SlideContainer } from './Projects.styled';
import 'react-image-gallery/styles/css/image-gallery.css';
import Barber_img from '../../../images/projects/barber_project.webp';
import Animal_welfare_img from '../../../images/projects/animal_welfare_project.webp';
import Filmoteka_img from '../../../images/projects/filmoteka_project.webp';
import Ice_cream_img from '../../../images/projects/ice_cream_project.webp';
import { Container, Title } from 'components/baseStyles/CommonStyle.styled';
import { Button } from 'components/baseStyles/Button.styled';

export const Project = () => {

  const hendleClickProject = (e) => {
    e.preventDefault();
    switch(e.target.alt){
      case "barbershop project": 
      window.open("https://studentvlad5.github.io/barbershop/", '_blank').focus();
      break;
      case "animal welfare project": 
      window.open("https://studentvlad5.github.io/animal-welfare-network/", '_blank').focus();
      break;
      case "ice cream project": 
      window.open("https://studentvlad5.github.io/project_ice-cream/", '_blank').focus();
      break;
      case "filmoteka project": 
      window.open("https://studentvlad5.github.io/filmoteka-js-project/", '_blank').focus();
      break;
      default: 
      break;
    }
  }
  const images = [
    {
      original: Barber_img,
      thumbnail: Barber_img,
      description:"A convenient service for hairdressers, massage salons, which helps users make online reservations for the selected service",
      originalAlt:"barbershop project",
      title:"A convenient service for hairdressers, massage salons, which helps users make online reservations for the selected service",
    },
    {
      original: Animal_welfare_img,
      thumbnail: Animal_welfare_img,
      description:"A project that helps to find a pet for youself or place a homeless animal in good hands",
      originalAlt:"animal welfare project",
      title:"A project that helps to find a pet for youself or place a homeless animal in good handsProject #2",
    },
    {
      original: Filmoteka_img,
      thumbnail: Filmoteka_img,
      originalAlt:"filmoteka project",
      description:"This site helps to choose movies or cartoons for viewing by the whole family and records the preferences of each individual member of the family",
      title:"This site helps to choose movies or cartoons for viewing by the whole family and records the preferences of each individual member of the family",
    },
    {
      original: Ice_cream_img,
      thumbnail: Ice_cream_img,
      originalAlt:"ice cream project",
      description:"A project for ordering delicious and cold ice cream",
      title:"A project for ordering delicious and cold ice cream",
    },
  ];

  return (
    <Container>
      <Title>EXPLORE OUR WORKS</Title>
      <SlideContainer>
        <ImageGallery autoPlay={true} items={images} lazyLoad={true} description={images} slideDuration={700} originalTitle={images} originalAlt={images} onClick={hendleClickProject}/>;
      </SlideContainer>
    <Button style={{marginTop:"20px", padding:"10px 20px"}}>Order Now</Button>
    </Container>
  );
};
