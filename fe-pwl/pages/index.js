import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import FooterLower from '../components/FooterLower';
import Card from '../components/Card';
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
        <div className="mx-auto lg:flex">
          <div>
            <p className="text-lg py-5 uppercase">Senapan Angin</p>
            <div className="flex-col lg:flex">
              <Card></Card>
              <Card></Card>
            </div>
          </div>
          <div>
            <p className="text-lg py-5 uppercase">Pistol Angin</p>
            <Card></Card>
          </div>
        </div>
      </Layout>
      <Footer></Footer>
      <FooterLower></FooterLower>
    </>
  );
};

export default homepage;
