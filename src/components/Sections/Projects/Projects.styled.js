import styled from "styled-components";

const SlideContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-family: "Manrope";
  font-style: normal;
  /* width: 1210px; */
  min-height: 441px;
  overflow: hidden;
`;
const ImgItemContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`;
const SlideImg = styled.img`
  width: 303px;
  height: 274px;
  cursor: pointer;
  transition: all 0.5s ease-out;
  border-radius: 10px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  &:hover {
    transform: scale(1.3, 1.3);
    cursor: pointer;
  }
`;

export { SlideImg, SlideContainer, ImgItemContainer };
