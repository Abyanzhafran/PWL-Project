import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import FooterLower from '../components/FooterLower';
import ProductList from '../components/ProductList';
import TeamList from '../components/TeamList';
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
      <Layout className={`bg-primary-lighter text-secondary-lighter`}>
        <div className=" text-center font-bold py-10 lg:py-20">
          <p className="text-2xl py-5 uppercase">Daftar Produk Kami</p>
          <p className="text-md px-10 lg:text-lg">
            Berikut beberapa produk pilihan semuanya masih tersedia dengan stok
            yang banyak dan berbagai rentang harga. Beli dan nikmati kualitas
            terbaik.
          </p>
        </div>
        <ProductList></ProductList>
      </Layout>
      <Layout className={`bg-primary text-secondary-lighter`}>
        <div className=" text-center font-bold py-10 lg:py-20">
          <p className="text-2xl py-5 uppercase">Our Team</p>
          <p className="text-md px-10 lg:text-lg">Meet Our Team!</p>
        </div>
        <TeamList></TeamList>
      </Layout>
      <Footer></Footer>
      <FooterLower></FooterLower>
    </>
  );
};

export default homepage;
