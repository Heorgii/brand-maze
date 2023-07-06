import React, { useEffect, useRef, useState } from 'react';
import { Box, ItemDiscr, ItemNumber, ItemTitle } from '../Home.styled';
import {
  BoxSlider,
  Btn,
  BtnBox,
  SlideItem,
  SliderList,
} from './Carousel.styled';

export const Carousel = ({ slides }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrentSlide(prevSlide =>
  //         prevSlide === slides.length - 1 ? 0 : prevSlide + 1
  //       );
  //     }, 2000);

  //     return () => clearInterval(interval);
  //   }, [slides.length]);

  const [isPrevDisabled, setPrevDisabled] = useState(true);
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;

    const handleScroll = () => {
      setPrevDisabled(track.scrollLeft <= 0);
    };

    track.addEventListener('scroll', handleScroll);

    return () => {
      track.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handlePrevClick = () => {
    const track = trackRef.current;
    const slideWidth = track.firstElementChild.offsetWidth;

    track.scrollTo({
      left: track.scrollLeft - slideWidth,
      behavior: 'smooth',
    });
  };

  const handleNextClick = () => {
    const track = trackRef.current;
    const slideWidth = track.firstElementChild.offsetWidth;

    track.scrollTo({
      left: track.scrollLeft + slideWidth,
      behavior: 'smooth',
    });
  };

  return (
    <Box>
      <BoxSlider data-slider>
        <SliderList data-slider-track ref={trackRef}>
          {slides.map(slide => (
            <li key={slide.id}>
              <SlideItem>
                <ItemTitle>{slide.title}</ItemTitle>
                <ItemNumber>{slide.number}</ItemNumber>
                <ItemDiscr>{slide.text}</ItemDiscr>
              </SlideItem>
            </li>
          ))}
        </SliderList>

        <BtnBox>
          <Btn
            data-slider-prev
            disabled={isPrevDisabled}
            onClick={handlePrevClick}
          >
            Previous
          </Btn>
          <Btn data-slider-next onClick={handleNextClick}>
            Next
          </Btn>
        </BtnBox>
      </BoxSlider>
    </Box>
  );
};
