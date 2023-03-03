import React, { useEffect } from 'react';
import { FooterFour, HeaderFive, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import BlogArea from './blog-area';
import BrandArea from './brand-area';
import ClientFeedback from './client-feedback';
import FeatureArea from './feature-area';
import HeroArea from './hero-area';
import MissionArea from './mission-area';
import ProjectArea from './project-area';
import ServicesArea from './services-area';
import TeamArea from './team-area';
import CreativeArea from './creatinve-are1';



const HomeFive = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
       <CreativeArea/>
      <HeaderFive/>
      {/* <HeroArea/> */}
      <FeatureArea/>
      <ServicesArea/>
      {/* <MissionArea/> */}
      {/* <BrandArea/> */}
      {/* <ProjectArea/> */}
      {/* <TeamArea/> */}
      {/* <ClientFeedback/> */}
      {/* <BlogArea/> */}
      {/* <FooterFour/> */}
    </Wrapper>
  );
};

export default HomeFive;