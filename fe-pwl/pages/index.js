import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import FooterLower from '../components/FooterLower';
import Layout from '../components/Layout';
import Head from 'next/head';

const homepage = () => {
  return (
    <>
      <Head>
        <title>Airgun Indonesia</title>
      </Head>
      <Navbar></Navbar>
      <Layout className={`bg-primary`}>
        <Hero></Hero>
      </Layout>
      <Footer></Footer>
      <FooterLower></FooterLower>
    </>
  );
};

export default homepage;
