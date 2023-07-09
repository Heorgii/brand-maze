import { styled } from "styled-components";
import { Number, Text } from "../Services/Services.styled";
import { Title } from "components/baseStyles/CommonStyle.styled";

export const Box = styled.div``;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 35px;

  @media screen and (max-width: 1279px) {
    flex-wrap: wrap;
  }
`;

export const TitleHome = styled(Title)`
  color: ${(props) => props.theme.black};
  @media screen and (max-width: 1279px) {
    flex-wrap: wrap;
  }

  @media screen and (max-width: 768px) {
    line-height: 35px;
  }
`;

export const ListBox = styled.ul`
  @media screen and (max-width: 1279px) {
    display: none;
  }
`;
export const ListBoxSwaper = styled.div`
  margin-top: 25px;
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
export const ListItem = styled.li`
  &:nth-child(2) {
    margin-left: 20px;
  }
`;

export const ListItemImg = styled.img`
  @media screen and (max-width: 1279px) {
    width: 200px;
    height: 150px;
  }

  &:nth-child(1) {
    margin-bottom: 88px;
  }

  &:nth-child(2) {
    margin-top: 88px;
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

  @media screen and (max-width: 1280px) {
    margin: 0;
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

  @media screen and (max-width: 1280px) {
    margin: 0;
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
  font-size: 21px;
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

    & > * {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 55px;
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
  color: ${(props) => props.theme.black};
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
