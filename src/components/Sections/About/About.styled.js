import styled, { keyframes } from 'styled-components';

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

const fadeInBottomAnimation = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ContainerForAbout = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  width: 100%;
  overflow: hidden;
  padding: 20px 30px;
  color: ${props => props.theme.black};
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ContainerForAboutForMobile = styled.div`
  display: none;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  width: 100%;
  overflow: hidden;
  padding: 20px 30px;
  color: ${props => props.theme.black};
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const ContainerForTeamForMobile = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  width: 100%;
  overflow: hidden;
  padding: 20px 30px;
  @media screen and (min-width: 799.9px) {
    display: none;
  }
`;

const ContainerForTeamForTablet = styled.div`
  display: none;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  width: 100%;
  overflow: hidden;
  padding: 20px 30px;
  @media screen and (min-width: 800px) and (max-width: 999.9px) {
    display: flex;
  }
`;
const ContainerForTeam = styled.div`
  display: none;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  width: 100%;
  overflow: hidden;
  padding: 20px 30px;
  @media screen and (min-width: 1000px) {
    display: flex;
  }
`;
const ContainerForIcon = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  width: 100%;
  overflow: hidden;
  padding-bottom: 40px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  & > * {
    &:nth-child(2) {
      animation: ${fadeInRightAnimation} 0.5s ease-in both;
    }

    &:nth-child(1) {
      animation: ${fadeInLeftAnimation} 0.5s ease-in both;
    }
  }
`;
const ContainerForIconText = styled.div`
  animation: ${fadeInBottomAnimation} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1);
`;
const ContainerForIconTablet = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  overflow: hidden;
  @media screen and (max-width: 490px) {
    flex-direction: column;
  }
`;

const TitleTeam = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  color: ${props => props.theme.black};
`;

const Img = styled.img`
  width: 45px;
  height: 45px;
  /* or to blue */
  filter: invert(0.5) sepia(1) saturate(5) hue-rotate(175deg);
`;

const ImgForTeam = styled.img`
  width: 250px;
  height: 357px;
  @media screen and (max-width: 490px) {
    width: 150px;
    height: 257px;
  }
`;

const ItemImgText = styled.div`
  width: 170px;
  height: 60px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.black};
`;
const PaddingItem = styled.p`
  padding: 16px;
`;

const ItemWrap = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  width: 100%;
  overflow: hidden;
  padding: 20px 30px;
`;
const TitleItem = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-size: 32px;
  letter-spacing: 4%;
  font-weight: 700;
  text-transform: uppercase;
  color: ${props => props.theme.black};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 4px;
  min-height: 100px;
`;

const JobItem = styled.h5`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-size: 18px;
  letter-spacing: 4%;
  font-weight: 500;
  color: ${props => props.theme.grey};
  min-height: 42px;
`;
const SocialsList = styled.ul`
  display: flex;
`;

const SocialsListItem = styled.li`
  cursor: pointer;
  padding: 2px;
  color: ${props => props.theme.black};

  &:not(:last-child) {
    margin-right: 20px;
  }
  & > *:hover,
  & > *:focus {
    fill: ${props => props.theme.accentRed};
  }

  & svg {
    fill: currentColor;
  }
`;

export {
  ContainerForAbout,
  ContainerForIcon,
  ContainerForIconText,
  Img,
  ItemImgText,
  PaddingItem,
  ContainerForTeam,
  ItemWrap,
  TitleItem,
  JobItem,
  SocialsList,
  SocialsListItem,
  ContainerForAboutForMobile,
  ContainerForIconTablet,
  ImgForTeam,
  ContainerForTeamForMobile,
  ContainerForTeamForTablet,
  TitleTeam,
};
