import { Container, Title } from "components/baseStyles/CommonStyle.styled";
import { ContainerForAbout, ContainerForDiv, Img, ItemImgText, PaddingItem } from "./About.styled";

import chartbar from "../../../images/about/mdi_light_chart-bar.svg"
import chartpie from "../../../images/about/mdi_light_chart-pie.svg"
import flask from "../../../images/about/mdi_light_flask.svg"
import gift from "../../../images/about/mdi_light_gift.svg"

export const About = () => {
  return <Container>
  <Title>ABOUT</Title>
  <ContainerForAbout>
  <ContainerForDiv>
    <div style={{padding:"20px"}}>Our approach to marketing is a holistic approach that includes strategic planning, creative design, effective marketing campaigns and an emphasis on building lasting relationships with clients. We work tirelessly to ensure the success and growth of our clients.</div>
    <div style={{padding:"20px"}}>At Brand Maze, we pride ourselves on our ability to create exceptional brands that capture attention, demonstrate quality and leave a lasting impression. Our team of talented professionals work together, combining strategy, creativity and technology to achieve the best results for our clients.</div>
    </ContainerForDiv>
    <div style={{padding:"20px"}}>Join us at Brand Maze and let us be your trusted partner in developing your brand. Together we can create the magic that will make your brand stand out and attract more success.</div>
  </ContainerForAbout>
  <ContainerForDiv>
    <ItemImgText>
      <Img src={gift} alt="gift"/>
      <PaddingItem>Experienced team</PaddingItem>
    </ItemImgText>
    <ItemImgText>
      <Img src={chartpie} alt="chartpie"/>
      <PaddingItem>Business Strategy</PaddingItem>
    </ItemImgText>
    <ItemImgText>
      <Img src={chartbar} alt="chartbar"/>
      <PaddingItem>Amazing Growth</PaddingItem>
    </ItemImgText>
    <ItemImgText>
      <Img src={flask} alt="flask"/>
      <PaddingItem>Technical Supervision</PaddingItem>
    </ItemImgText>
  </ContainerForDiv>
  </Container>
};
