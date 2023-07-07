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
padding: 5px;
`;

export {ContainerForAbout, ContainerForDiv, Img, ItemImgText, PaddingItem}