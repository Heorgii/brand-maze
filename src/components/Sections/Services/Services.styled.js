import { styled } from 'styled-components';

export const WrapperText = styled.div`
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 80px;
  }
`;

export const WrapperBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    margin-bottom: 80px;
  }
`;

export const WrapperBoxSkills = styled(WrapperBox)`
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const BoxSkills = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 34px;

  @media screen and (min-width: 768px) {
    width: 40%;
    margin-bottom: 0;
  }
`;

export const ListSkills = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 40%;
    gap: 30px;
  }

  & progress {
    width: 100%;
  }
`;

export const Subtitle = styled.h2`
  margin-bottom: 20px;
  color: #323543;
  text-align: center;
  font-size: 26px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (min-width: 768px) {
    font-size: 34px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 40px;
  }
`;

export const DescriptionSkills = styled.p`
  color: #686f81;
  text-align: center;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;

  color: #686f81;
  font-size: 14px;
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.57px;
  text-transform: capitalize;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;

export const Text = styled.p`
  color: #686f81;
  font-size: 15px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
  text-align: start;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    text-align: left;
  }

  @media screen and (min-width: 1280px) {
    font-size: 28px;
  }
`;

export const TextCenter = styled(Text)`
  text-align: center;
`;

export const TableHeading = styled.th`
  color: #000;
  text-align: center;
  font-size: 20px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (min-width: 768px) {
    font-size: 25px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 40px;
  }
`;

export const TableData = styled.td`
  padding-left: 10px;
  color: #686f81;
  font-size: 20px;
  font-family: 'Bungee', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
  text-transform: uppercase;
  text-align: start;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    text-align: left;
  }

  @media screen and (min-width: 1280px) {
    font-size: 28px;
  }
`;

export const StepsSlider = styled.ul``;

export const Step = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Number = styled.span`
  color: rgba(0, 0, 0, 0.19);
  font-size: 100px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: -7px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 200px;
  }
`;

export const NumberSmall = styled(Number)`
  font-size: 48px;
  letter-spacing: -4.8px;

  @media screen and (min-width: 768px) {
    font-size: 96px;
  }
`;

export const Heading = styled.h3`
  margin-bottom: 15px;

  color: #000;
  text-align: center;
  font-size: 20px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    font-size: 25px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 40px;
  }
`;

export const HeadingSmall = styled(Heading)`
  margin-bottom: 0;
  margin-left: 10px;
  text-align: start;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const HeadingBox = styled.div`
  display: flex;
  align-items: center;
`;

export const ListQuestions = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
