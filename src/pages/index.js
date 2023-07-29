import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';
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
import favicon from '../images/favicon.ico';

const Home = () => {
  const headline = 'Build Your Website in Minutes with Our Drag-and-Drop Builder';
  return (
    <Layout>
      <Helmet title={headline}>
        <html lang="en" />
        <meta name="icon" href={favicon} />
        <meta name="theme-color" content="#ffffff"></meta>
      </Helmet>
      <Banner />
      <AdvanceDesign />
      <SimpleSteps />
      {/* <WorkTogether /> */}
      {/* <UserSpeak /> */}
      <Pricing />
      <Faq />
      <Help />
    </Layout>
  );
};

export default Home;
