import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Head from 'next/head';

const homepage = () => {
  return (
    <>
      <Head>
        <title>Airgun Indonesia</title>
      </Head>
      <Navbar></Navbar>
      <Layout></Layout>
      <Footer></Footer>
    </>
  );
};

export default homepage;
