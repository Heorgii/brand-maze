import { keyframes, styled } from 'styled-components';
import { Number, Text } from '../Services/Services.styled';
import { Title } from 'components/baseStyles/CommonStyle.styled';


const flipInVerLeftAnimation = keyframes`
  0% {
    transform: rotateY(80deg);
    opacity: 0;
  }
  100% {
    transform: rotateY(0);
    opacity: 1;
  }
`;

const flipInVerRightAnimation = keyframes`
  0% {
    transform: rotateY(-80deg);
    opacity: 0;
  }
  100% {
    transform: rotateY(0);
    opacity: 1;
  }
`;

const fadeInLeftAnimation = keyframes`
  0% {
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeInRightAnimation = keyframes`
  0% {
    transform: translateX(50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Box = styled.div``;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 35px;
`;

export const TitleHome = styled(Title)`
  line-height: 35px;
  flex-wrap: wrap;

  @media screen and (min-width: 1280px) {
    line-height: 65px;
  }
  /* @media screen and (min-width: 320px) and(max-width: 768px) {
    line-height: 35px;
  } */
`;

export const ListBox = styled.div`
  display: block;

  @media (max-width: 1280px) {
    display: none;
  }
`;

export const ListBoxSwaper = styled.div`
  display: none;

  @media (max-width: 1280px) {
    display: block;
    margin-top: 25px;
  }
`;

export const SwiperSvg = styled.svg`
  fill: ${props => props.theme.blackOpacity};
`;

export const ListItem = styled.li`
  &:nth-child(2) {
    margin-left: 20px;
  }
`;

export const ListItemImg = styled.img`
  @media screen and (max-width: 1280px) {
    width: 200px;
    height: 150px;
  }

  &:nth-child(1) {
    margin-bottom: 88px;
    animation: ${flipInVerLeftAnimation} 0.7s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    @media screen and (max-width: 1280px) {
      margin-bottom: 20px;
    }
  }

  &:nth-child(2) {
    margin-top: 88px;
    animation: ${flipInVerRightAnimation} 0.7s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    @media screen and (max-width: 1280px) {
      margin-bottom: 20px;
    }
  }
`;

export const ListItemText = styled.p`
  display: flex;
  flex-wrap: wrap;
  width: 369px;
  color: ${(props) => props.theme.blackOpacity};
  font-size: 21px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 35px;

  &:nth-child(1) {
    animation: ${fadeInRightAnimation} 0.5s ease-in both;
  }

  &:nth-child(2) {
    animation: ${fadeInLeftAnimation} 0.5s ease-in both;
  }

  & > * {
    font-weight: bold;
    background: linear-gradient(
      to left,
      rgba(65, 45, 183, 1),
      rgba(219, 47, 47, 1) 120%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }

  @media screen and (max-width: 768px) {
    font-size: 15px;
    font-weight: 400;
  }
`;

export const ListItemTextSwiper = styled.p`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  color: ${(props) => props.theme.blackOpacity};
  font-size: 21px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  & > * {
    font-weight: bold;
    background: linear-gradient(
      to left,
      rgba(65, 45, 183, 1),
      rgba(219, 47, 47, 1) 120%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }

  @media screen and (max-width: 768px) {
    font-size: 15px;
    font-weight: 400;
  }
`;

export const ConclusionText = styled.p`
  display: flex;
  flex-wrap: wrap;
  margin-top: 35px;
  text-align: center;
  color: ${(props) => props.theme.blackOpacity};
  font-size: 35px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 80px;

  & > * {
    font-weight: bold;
    background: linear-gradient(
      to left,
      rgba(65, 45, 183, 1),
      rgba(219, 47, 47, 1) 120%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }

  @media screen and (max-width: 768px) {
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 55px;

    & > * {
      font-size: 20px;
    }
  }
`;

export const ProductionText = styled.p`
  position: absolute;
  right: -175px;
  bottom: 224px;
  transform: rotate(-90deg);
  text-align: center;
  color: ${(props) => props.theme.blackOpacity};
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 5.4px;
  text-transform: uppercase;

  @media screen and (max-width: 1280px) {
    display: none;
  }
`;

export const CompList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* width: 663px; */
`;

export const CompListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 45px;
  }
  &:nth-child(2) {
    text-align: -webkit-right;
  }
  &:nth-child(4) {
    text-align: -webkit-right;
  }
`;

export const ItemNumber = styled(Number)`
  font-size: 30px;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0;
  /* color: ${(props) => props.theme.black}; */
  @media screen and (min-width: 768px) {
    font-size: 80px;
  }
`;

export const ItemTitle = styled.h3`
  margin-bottom: 15px;
  color: ${(props) => props.theme.black};
  font-size: 20px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    font-size: 25px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 36px;
  }
`;

export const ItemDiscr = styled(Text)`
  color: ${(props) => props.theme.black};
  width: 319px;
  text-align: left;

  @media screen and (min-width: 768px) {
    width: 600px;
  }
`;
