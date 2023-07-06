import { styled } from 'styled-components';
import { ReactComponentElement } from 'react';
export const Box = styled.div``;

export const Title = styled.h1`
  width: 500px;
  font-size: 55px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 900;
  line-height: 65px;
  letter-spacing: -6.5px;
  text-transform: uppercase;
  background: linear-gradient(rgba(65, 45, 183, 1), rgba(219, 47, 47, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  margin-top: 35px;
`;

export const ListItem = styled.li`
  &:nth-child(2) {
    margin-left: 20px;
  }
`;

export const ListItemImg = styled.img`
  /* width: 200px;
  height: 200px; */

  &:nth-child(1) {
    margin-bottom: 88px;
  }

  &:nth-child(2) {
    margin-top: 88px;
  }
`;

export const ListItemText = styled.p`
  width: 369px;
  color: rgba(0, 0, 0, 0.8);
  font-size: 21px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 35px;

  &:nth-child(3) {
    width: 758px;
    margin-top: 35px;
    text-align: center;
  }
`;

export const ProductionText = styled.p`
  position: absolute;
  right: -175px;
  bottom: 224px;
  transform: rotate(-90deg);
  text-align: center;
  color: #000;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 5.4px;
  text-transform: uppercase;
`;

export const CompList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 663px;
`;

export const CompListItem = styled.li`
  &:nth-child(2) {
    text-align: -webkit-right;
  }
  &:nth-child(4) {
    text-align: -webkit-right;
  }
`;

export const ItemTitle = styled.h5`
  color: rgba(0, 0, 0, 0.88);
  font-size: 22px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: 170%;
`;

export const ItemNumber = styled.p`
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ItemDiscr = styled.p`
  color: rgba(0, 0, 0, 0.88);
  font-size: 13px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
  width: 319px;
  text-align: left;
`;
