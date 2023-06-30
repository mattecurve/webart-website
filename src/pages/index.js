import React from 'react';
import '../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Help from '../components/Help';
import Banner from './banner';
import AdvanceDesign from './advance';
import SimpleSteps from './steps';
import WorkTogether from './worktogether';
import UserSpeak from './usercarousel';
import Faq from './faq';
import Pricing from './pricingsection';
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';
const Home = () => {
  const headline = 'webart.io';
  return (
    <Layout>
      <Helmet>
        <title>{headline} - MatteCurve Technologies Private Limited</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Helmet>
      <Banner />
      <AdvanceDesign />
      <SimpleSteps />
      <WorkTogether />
      <UserSpeak />
      <Pricing />
      <Faq />
      <Help />
    </Layout>
  );
};

export default Home;
