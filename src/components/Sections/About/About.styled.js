import styled from "styled-components";

const ContainerForAbout = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  width: 100%;
  overflow: hidden;
  padding: 20px 30px;
`;
const ContainerForDiv = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  width: 100%;
  overflow: hidden;
`;
const Img = styled.img`
  width: 45px;
  height: 45px;
`;
const ItemImgText = styled.div`
  width: 170px;
  height: 60px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;
const PaddingItem = styled.p`
padding: 16px;
`;

const ContainerForTeam = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  width: 100%;
  overflow: hidden;
  padding: 20px 30px;
`;

const ItemWrap = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  width: 100%;
  overflow: hidden;
  padding: 20px 30px;
`;
const TitleItem = styled.h3`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-size: 32px;
  letter-spacing: 4%;
  font-weight: 700;
  text-transform: uppercase;
  color: black;
  padding-top: 15px;
  padding-bottom: 4px;
`;

const JobItem = styled.h5`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-size: 18px;
  letter-spacing: 4%;
  font-weight: 500;
  color: grey;
`;
const SocialsList = styled.ul`
  display: flex;
`;

const SocialsListItem = styled.li`
  cursor: pointer;
  padding: 2px;
  padding-top: 15px;
  &:not(:last-child) {
    margin-right: 20px;
  }
  & > *:hover,
  & > *:focus {
    fill: rgba(219, 47, 47, 1);
  }
`;

export {ContainerForAbout, ContainerForDiv, Img, ItemImgText, PaddingItem,ContainerForTeam, ItemWrap, TitleItem, JobItem, SocialsList, SocialsListItem}