import { styled } from 'styled-components';

export const Box = styled.div`
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
`;

export const BoxSlider = styled.div`
  position: relative;
  overflow: hidden;
`;

export const SliderList = styled.ul`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-inline: 1rem;
  scroll-behavior: smooth;

  list-style-type: none;
  margin-right: calc(1rem * -1);

  & > * {
    flex: 0 0 25%;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    padding-right: 1rem;
  }

  // hide scrollbar
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BtnBox = styled.div`
  margin-top: 1rem;

  &:disabled {
    opacity: 0.5;
  }
`;

export const Btn = styled.button``;
export const SlideItem = styled.div``;
