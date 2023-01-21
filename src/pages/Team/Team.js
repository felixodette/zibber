import React from 'react';
import CommonCtaArea from '../../components/CommonCtaArea/CommonCtaArea';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeOneHeader from '../Home/HomeOneHeader/HomeOneHeader';
import TeamArea from './TeamArea/TeamArea';

const Team = () => {
   return (
      <>
         <PageHelmet pageTitle="Team Page" />

         <HomeOneHeader/>
         <CommonPageHeader title="Our Team" subtitle="Team" />
         <TeamArea/>
         <CommonCtaArea/>
         <Footer/>
      </>
   );
};

export default Team;