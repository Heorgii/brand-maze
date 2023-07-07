import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 50px 35px 70px;

  @media screen and (min-width: 768px) {
    padding: 90px 60px;
  }

  @media screen and (min-width: 1280px) {
    padding: 100px 100px 100px 30px;
  }
`;

const Title = styled.h1`
  display: inline;
  margin: 0 0 15px 0;

  font-size: 32px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 900;
  line-height: 65px;
  letter-spacing: -1px;
  text-transform: uppercase;
  background: linear-gradient(
    to left,
    rgba(65, 45, 183, 1),
    rgba(219, 47, 47, 1) 120%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;

  @media screen and (min-width: 768px) {
    margin: 0 0 25px 0;
    font-size: 55px;
    /* letter-spacing: -4.88px; */
  }

  @media screen and (min-width: 1280px) {
    margin: 0 0 35px 0;
    font-size: 55px;
    /* letter-spacing: -6.58px; */
  }
`;

export { Container, Title };
