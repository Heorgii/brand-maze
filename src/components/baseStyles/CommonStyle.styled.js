import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 30px;

  @media screen and (min-width: 768px) {
    margin-top: 90px;
    margin-bottom: 45px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 90px;
    margin-bottom: 45px;
    /* max-width: 1200px; */
  }
`;

const Title = styled.h1`
  margin: 0 0 15px 0;

  font-size: 32px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 900;
  line-height: 65px;
  letter-spacing: -2.88px;
  text-transform: uppercase;
  background: linear-gradient(rgba(65, 45, 183, 1), rgba(219, 47, 47, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;

  @media screen and (min-width: 768px) {
    margin: 0 0 25px 0;
    font-size: 55px;
    letter-spacing: -4.88px;
  }

  @media screen and (min-width: 1280px) {
    margin: 0 0 35px 0;
    font-size: 55px;
    letter-spacing: -6.58px;
  }
`;

export { Container, Title };
