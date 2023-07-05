import ImageGallery from 'react-image-gallery';
import { SlideContainer } from "./Projects.styled";
import "react-image-gallery/styles/css/image-gallery.css";
import Barber_img from "../../../images/projects/barber_project.webp";
import Animal_welfare_img from "../../../images/projects/animal_welfare_project.webp";
import Filmoteka_img from "../../../images/projects/filmoteka_project.webp";
import Ice_cream_img from "../../../images/projects/ice_cream_project.webp";

export const Project = () =>{
  const images = [
    {
      original: Barber_img,
      thumbnail: Barber_img,
    },
    {
      original: Animal_welfare_img,
      thumbnail: Animal_welfare_img,
    },
    {
      original: Filmoteka_img,
      thumbnail: Filmoteka_img,
    },
    {
      original: Ice_cream_img,
      thumbnail: Ice_cream_img,
    },
  ];



    return (
    <><h3>EXPLORE OUR WORKS</h3>
    <SlideContainer>
    <ImageGallery autoPlay={true} items={images} />;
    </SlideContainer>
    </>)
}