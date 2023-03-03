import React, { useEffect } from 'react';
// import { FooterTwo, HeaderTwo, Wrapper } from '../../../layout';
import { FooterThree, HeaderFour, Wrapper } from '../../../layout';
// import Breadcrumb from '../../../components/common/breadcrumb';

import { animationCreate } from '../../../utils/utils';
import TeamArea from '../../about/team-area';
import BlogArea from './blog-area';
import ClientFeedback from './client-feedback';
import CtaArea from './cta-area';
import HeroArea from './hero-area';
import NewsLetter from './news-letter';
import ProjectArea from './project-area';
import Services from './services';

const HomeTwo = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, [])
  return (
    <Wrapper>
      <HeaderFour />
      {/* <HeaderTwo /> */}
      <HeroArea />
      {/* <Breadcrumb title={"About Bigbuddy Team"} /> */}
      {/* <Services/> */}
      {/* <ProjectArea/> */}
      {/* <ClientFeedback/> */}
      {/* <CtaArea/> */}
      {/* <BlogArea/> */}
      <TeamArea/>
      {/* <NewsLetter/> */}
      <FooterThree/>
    </Wrapper>
  );
};

export default HomeTwo;