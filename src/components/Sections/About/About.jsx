import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

import { Container, Title } from "components/baseStyles/CommonStyle.styled";
import { ContainerForAbout, ContainerForIcon, Img, ItemImgText, PaddingItem, ContainerForTeam, ItemWrap, TitleItem, JobItem, SocialsList, SocialsListItem, ContainerForAboutForMobile, ContainerForIconTablet, ImgForTeam, ContainerForTeamForMobile, ContainerForTeamForTablet, TitleTeam } from "./About.styled";

import chartbar from "../../../images/about/mdi_light_chart-bar.svg";
import chartpie from "../../../images/about/mdi_light_chart-pie.svg";
import flask from "../../../images/about/mdi_light_flask.svg";
import gift from "../../../images/about/mdi_light_gift.svg";

import heorhii from "../../../images/about/team/heorhii.jpg";
import julia from "../../../images/about/team/julia.jpg";
import vlad from "../../../images/about/team/vlad.jpg";

import sprite from '../../../images/sprite.svg';
import { useEffect } from 'react';

export const About = () => {

  useEffect(()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
    },[])

  return <Container>
  <Title>ABOUT</Title>
  <ContainerForAbout>
  <ContainerForIcon>
    <div style={{padding:"20px"}}>Our approach to marketing is a holistic approach that includes strategic planning, creative design, effective marketing campaigns and an emphasis on building lasting relationships with clients. We work tirelessly to ensure the success and growth of our clients.</div>
    <div style={{padding:"20px"}}>At Brand Maze, we pride ourselves on our ability to create exceptional brands that capture attention, demonstrate quality and leave a lasting impression. Our team of talented professionals work together, combining strategy, creativity and technology to achieve the best results for our clients.</div>
    </ContainerForIcon>
    <div style={{padding:"20px"}}>Join us at Brand Maze and let us be your trusted partner in developing your brand. Together we can create the magic that will make your brand stand out and attract more success.</div>
  </ContainerForAbout>
  <ContainerForAboutForMobile>
  <Swiper
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          mousewheel={true}
          keyboard={true}
          loop={true}
          loopPreventsSliding={true}
          loopedSlides={1}
        >
          <SwiperSlide>
          <div style={{padding:"20px"}}>Our approach to marketing is a holistic approach that includes strategic planning, creative design, effective marketing campaigns and an emphasis on building lasting relationships with clients. We work tirelessly to ensure the success and growth of our clients.</div>
          </SwiperSlide>
          <SwiperSlide>
          <div style={{padding:"20px"}}>At Brand Maze, we pride ourselves on our ability to create exceptional brands that capture attention, demonstrate quality and leave a lasting impression. Our team of talented professionals work together, combining strategy, creativity and technology to achieve the best results for our clients.</div>
          </SwiperSlide>
          <SwiperSlide>
          <div style={{padding:"20px"}}>Join us at Brand Maze and let us be your trusted partner in developing your brand. Together we can create the magic that will make your brand stand out and attract more success.</div>
          </SwiperSlide>
        </Swiper>
  </ContainerForAboutForMobile>
  <ContainerForIcon>
    <ContainerForIconTablet className='containerJustifyEnd'>
    <ItemImgText>
      <Img src={gift} alt="gift"/>
      <PaddingItem>Experienced team</PaddingItem>
    </ItemImgText>
    <ItemImgText>
      <Img src={chartpie} alt="chartpie"/>
      <PaddingItem>Business Strategy</PaddingItem>
    </ItemImgText>
    </ContainerForIconTablet>
    <ContainerForIconTablet className='containerJustifyStart'>
    <ItemImgText>
      <Img src={chartbar} alt="chartbar"/>
      <PaddingItem>Amazing Growth</PaddingItem>
    </ItemImgText>
    <ItemImgText>
      <Img src={flask} alt="flask"/>
      <PaddingItem>Technical Supervision</PaddingItem>
    </ItemImgText>
    </ContainerForIconTablet>
  </ContainerForIcon>
    <div style={{display:"flex", justifyContent:"center"}}>
    <TitleTeam>OUR PROFESSIONAL TEAM</TitleTeam>
    </div>
  <ContainerForTeam>
    <ItemWrap>
      <ImgForTeam src={vlad} alt="vlad"/>
      <TitleItem>Vlad popov</TitleItem>
      <JobItem>Full-Stack Developer</JobItem>
      <SocialsList>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#linkedin'}></use>
              </svg>
            </SocialsListItem>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#github'}></use>
              </svg>
            </SocialsListItem>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#profile'}></use>
              </svg>
            </SocialsListItem>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#mobile'}></use>
              </svg>
            </SocialsListItem>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#telegram'}></use>
              </svg>
            </SocialsListItem>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#envelop'}></use>
              </svg>
            </SocialsListItem>
      </SocialsList>
    </ItemWrap>
    <ItemWrap>
      <ImgForTeam src={julia} alt="julia"/>
      <TitleItem>Julia golban</TitleItem>
      <JobItem>Full-Stack Engineer</JobItem>
      <SocialsList>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#linkedin'}></use>
              </svg>
            </SocialsListItem>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#github'}></use>
              </svg>
            </SocialsListItem>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#profile'}></use>
              </svg>
            </SocialsListItem>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#mobile'}></use>
              </svg>
            </SocialsListItem>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#telegram'}></use>
              </svg>
            </SocialsListItem>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#envelop'}></use>
              </svg>
            </SocialsListItem>
      </SocialsList>
    </ItemWrap>
    <ItemWrap>
      <ImgForTeam src={heorhii} alt="heorhii"/>
      <TitleItem>Heorhii rushchak</TitleItem>
      <JobItem>Full-Stack Developer</JobItem>
      <SocialsList>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#linkedin'}></use>
              </svg>
            </SocialsListItem>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#github'}></use>
              </svg>
            </SocialsListItem>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#profile'}></use>
              </svg>
            </SocialsListItem>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#mobile'}></use>
              </svg>
            </SocialsListItem>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#telegram'}></use>
              </svg>
            </SocialsListItem>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#envelop'}></use>
              </svg>
            </SocialsListItem>
      </SocialsList>
    </ItemWrap>
  </ContainerForTeam>
  <ContainerForTeamForMobile>
  <Swiper
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          mousewheel={true}
          keyboard={true}
          loop={true}
          loopPreventsSliding={true}
          loopedSlides={1}
        >
          <SwiperSlide>
            <ItemWrap>
            <ImgForTeam src={vlad} alt="vlad"/>
            <TitleItem>Vlad popov</TitleItem>
            <JobItem>Full-Stack Developer</JobItem>
            <SocialsList>
                <SocialsListItem>
                  <svg width="20" height="20">
                    <use href={sprite + '#linkedin'}></use>
                  </svg>
                </SocialsListItem>
                <SocialsListItem>
                  <svg width="20" height="20">
                    <use href={sprite + '#github'}></use>
                  </svg>
                </SocialsListItem>
                <SocialsListItem>
                  <svg width="20" height="20">
                    <use href={sprite + '#profile'}></use>
                  </svg>
                </SocialsListItem>
                <SocialsListItem>
                  <svg width="20" height="20">
                    <use href={sprite + '#mobile'}></use>
                  </svg>
                </SocialsListItem>
                <SocialsListItem>
                  <svg width="20" height="20">
                    <use href={sprite + '#telegram'}></use>
                  </svg>
                </SocialsListItem>
                <SocialsListItem>
                  <svg width="20" height="20">
                    <use href={sprite + '#envelop'}></use>
                  </svg>
                </SocialsListItem>
            </SocialsList>
            </ItemWrap>
          </SwiperSlide>
          <SwiperSlide>
            <ItemWrap>
            <ImgForTeam src={julia} alt="julia"/>
            <TitleItem>Julia golban</TitleItem>
            <JobItem>Full-Stack Engineer</JobItem>
            <SocialsList>
                <SocialsListItem>
                  <svg width="20" height="20">
                    <use href={sprite + '#linkedin'}></use>
                  </svg>
                </SocialsListItem>
                <SocialsListItem>
                  <svg width="20" height="20">
                    <use href={sprite + '#github'}></use>
                  </svg>
                </SocialsListItem>
                <SocialsListItem>
                  <svg width="20" height="20">
                    <use href={sprite + '#profile'}></use>
                  </svg>
                </SocialsListItem>
                <SocialsListItem>
                  <svg width="20" height="20">
                    <use href={sprite + '#mobile'}></use>
                  </svg>
                </SocialsListItem>
                <SocialsListItem>
                  <svg width="20" height="20">
                    <use href={sprite + '#telegram'}></use>
                  </svg>
                </SocialsListItem>
                <SocialsListItem>
                  <svg width="20" height="20">
                    <use href={sprite + '#envelop'}></use>
                  </svg>
                </SocialsListItem>
            </SocialsList>
            </ItemWrap>
          </SwiperSlide>
          <SwiperSlide>
            <ItemWrap>
            <ImgForTeam src={heorhii} alt="heorhii"/>
            <TitleItem>Heorhii rushchak</TitleItem>
            <JobItem>Full-Stack Developer</JobItem>
            <SocialsList>
                <SocialsListItem>
                  <svg width="20" height="20">
                    <use href={sprite + '#linkedin'}></use>
                  </svg>
                </SocialsListItem>
                <SocialsListItem>
                  <svg width="20" height="20">
                    <use href={sprite + '#github'}></use>
                  </svg>
                </SocialsListItem>
                <SocialsListItem>
                  <svg width="20" height="20">
                    <use href={sprite + '#profile'}></use>
                  </svg>
                </SocialsListItem>
                <SocialsListItem>
                  <svg width="20" height="20">
                    <use href={sprite + '#mobile'}></use>
                  </svg>
                </SocialsListItem>
                <SocialsListItem>
                  <svg width="20" height="20">
                    <use href={sprite + '#telegram'}></use>
                  </svg>
                </SocialsListItem>
                <SocialsListItem>
                  <svg width="20" height="20">
                    <use href={sprite + '#envelop'}></use>
                  </svg>
                </SocialsListItem>
            </SocialsList>
            </ItemWrap>
          </SwiperSlide>
  </Swiper>
  </ContainerForTeamForMobile>
  <ContainerForTeamForTablet>
  <Swiper
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          spaceBetween={50}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          mousewheel={true}
          keyboard={true}
        >
          <SwiperSlide>
            <ItemWrap>
        <ImgForTeam src={vlad} alt="vlad"/>
        <TitleItem>Vlad popov</TitleItem>
        <JobItem>Full-Stack Developer</JobItem>
        <SocialsList>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#linkedin'}></use>
              </svg>
            </SocialsListItem>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#github'}></use>
              </svg>
            </SocialsListItem>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#profile'}></use>
              </svg>
            </SocialsListItem>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#mobile'}></use>
              </svg>
            </SocialsListItem>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#telegram'}></use>
              </svg>
            </SocialsListItem>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#envelop'}></use>
              </svg>
            </SocialsListItem>
        </SocialsList>
            </ItemWrap>
          </SwiperSlide>
          <SwiperSlide>
            <ItemWrap>
        <ImgForTeam src={julia} alt="julia"/>
        <TitleItem>Julia golban</TitleItem>
        <JobItem>Full-Stack Engineer</JobItem>
        <SocialsList>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#linkedin'}></use>
              </svg>
            </SocialsListItem>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#github'}></use>
              </svg>
            </SocialsListItem>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#profile'}></use>
              </svg>
            </SocialsListItem>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#mobile'}></use>
              </svg>
            </SocialsListItem>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#telegram'}></use>
              </svg>
            </SocialsListItem>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#envelop'}></use>
              </svg>
            </SocialsListItem>
        </SocialsList>
            </ItemWrap>
          </SwiperSlide>
          <SwiperSlide>
            <ItemWrap>
        <ImgForTeam src={heorhii} alt="heorhii"/>
        <TitleItem>Heorhii rushchak</TitleItem>
        <JobItem>Full-Stack Developer</JobItem>
        <SocialsList>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#linkedin'}></use>
              </svg>
            </SocialsListItem>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#github'}></use>
              </svg>
            </SocialsListItem>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#profile'}></use>
              </svg>
            </SocialsListItem>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#mobile'}></use>
              </svg>
            </SocialsListItem>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#telegram'}></use>
              </svg>
            </SocialsListItem>
            <SocialsListItem>
              <svg width="20" height="20">
                <use href={sprite + '#envelop'}></use>
              </svg>
            </SocialsListItem>
        </SocialsList>
            </ItemWrap>
          </SwiperSlide>
  </Swiper>
  </ContainerForTeamForTablet>
  </Container>
};
