import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 30px;

  @media screen and (min-width: 768px) {
    padding: 60px 90px;
  }

  @media screen and (min-width: 1280px) {
    padding: 100px;
    max-width: 1280px;
  }
`;

const Title = styled.h1`
  margin: 0 0 20px 0;

  font-family: 'Montserrat', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 900;
  line-height: 1.373;
  letter-spacing: -2.56px;
  text-transform: uppercase;
  background: linear-gradient(rgba(65, 45, 183, 1), rgba(219, 47, 47, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;

  @media screen and (min-width: 768px) {
    margin: 0 0 45px 0;
    font-size: 55px;
    letter-spacing: -4.88px;
  }

  @media screen and (min-width: 1280px) {
    margin: 0 0 65px 0;
    font-size: 86px;
    letter-spacing: -6.88px;
  }
`;

export { Container, Title };
