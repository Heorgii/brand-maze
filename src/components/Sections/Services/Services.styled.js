import { styled } from 'styled-components';

export const WrapperText = styled.div`
  margin-bottom: 55px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 100px;
    max-width: 1200px;
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
    margin-bottom: 100px;
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
  position: relative;
  margin-bottom: 30px;

  color: ${props => props.theme.heading};
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
    font-size: 45px;
  }

  &::before {
    @media screen and (min-width: 768px) {
      position: absolute;
      content: '';
      top: -20px;
      left: 50px;

      width: 150px;
      height: 4px;

      border-radius: 2px;
      background: linear-gradient(
        rgba(65, 45, 183, 1),
        rgba(219, 47, 47, 1) 100%
      );
      -webkit-text-fill-color: transparent;
      color: transparent;
    }
  }
`;

export const SubtitleSkills = styled(Subtitle)`
  @media screen and (min-width: 1280px) {
    font-size: 40px;
  }
  &::before {
    display: none;
  }
`;

export const DescriptionSkills = styled.p`
  color: ${props => props.theme.text};
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

  color: ${props => props.theme.text};
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
  color: ${props => props.theme.text};
  font-size: 15px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
  text-align: start;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    text-align: left;
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const TextCenter = styled(Text)`
  text-align: center;
`;

export const TextSlider = styled(Text)`
  padding-bottom: 20px;
`;

export const TableHeading = styled.th`
  color: ${props => props.theme.black};
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
  color: ${props => props.theme.text};
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
    font-size: 36px;
  }
`;

export const Step = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StepBenefits = styled(Step)`
  &:nth-child(2n) {
    margin-left: 50px;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
    &:nth-child(2n) {
      margin-left: auto;
    }
  }
`;

export const Number = styled.span`
  font-size: 100px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -5px;
  text-transform: uppercase;

  background-color: rgba(0, 0, 0, 0.19);
  color: transparent;
  text-shadow: 2px 6px 3px rgba(255, 255, 255, 0.5);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;

  @media screen and (min-width: 768px) {
    font-size: 200px;
  }
`;

export const NumberSmall = styled(Number)`
  font-size: 48px;
  letter-spacing: -2px;

  @media screen and (min-width: 768px) {
    font-size: 96px;
  }
`;

export const Heading = styled.h3`
  margin-bottom: 15px;

  color: ${props => props.theme.black};
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
    font-size: 36px;
  }
`;

export const HeadingSmall = styled(Heading)`
  margin-bottom: 0;
  margin-left: 10px;
  text-align: start;

  @media screen and (min-width: 768px) {
    margin-left: 15px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    font-size: 32px;
  }
`;

export const HeadingBox = styled.div`
  display: flex;
  align-items: center;
`;

export const ListBenefits = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`;

export const ListQuestions = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`;
