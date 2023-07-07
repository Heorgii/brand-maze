import { styled } from 'styled-components';
import { Number } from '../Services/Services.styled';
export const Box = styled.div``;

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
  color: ${props => props.theme.blackOpacity};
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
    /* text-align: center; */
    font-size: 15px;
    /* font-style: normal; */
    font-weight: 400;
    /* line-height: 180%; */
  }
`;

export const ConclusionText = styled(ListItemText)`
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
`;

export const ProductionText = styled.p`
  position: absolute;
  right: -175px;
  bottom: 224px;
  transform: rotate(-90deg);
  text-align: center;
  color: ${props => props.theme.blackOpacity};
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
  color: ${props => props.theme.blackOpacity};
  font-size: 22px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: 170%;
`;

export const ItemNumber = styled(Number)`
  font-size: 30px;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0;
`;

export const ItemDiscr = styled.p`
  color: ${props => props.theme.blackOpacity};
  font-size: 13px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
  width: 319px;
  text-align: left;
`;
