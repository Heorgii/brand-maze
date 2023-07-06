import { styled } from 'styled-components';

export const Button = styled.button`
  margin: 0 auto;
  display: block;

  color: #fff;
  text-align: center;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  background: #000;
  border-radius: 3px;

  cursor: pointer;
  transition: all 150ms linear;

  &:hover,
  &:focus {
    background: #686f81;
  }

  @media screen and (min-width: 768px) {
    width: 250px;
    height: 70px;

    font-size: 24px;
  }
`;
