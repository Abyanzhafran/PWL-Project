import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import FooterLower from '../components/FooterLower';
import TeamList from '../components/TeamList';
import Layout from '../components/Layout';
import Head from 'next/head';

const homepage = () => {
  const url = 'http://127.0.0.1:8000/api/team';
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setTeams(res.data);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Airgun Indonesia</title>
      </Head>
      <Navbar />
      <Layout className={`bg-primary`} id="top">
        <Hero />
      </Layout>
      <Layout
        className={`bg-primary-lighter text-secondary-lighter`}
        id="about"
      >
        <div className="pt-10 pb-12 px-10 lg:px-5">
          <div className="pb-6">
            <span className="font-bold text-4xl text-secondary-lighter">
              Air Gun Indonesia
            </span>
          </div>
          <p className="text-md text-justify lg:text-lg">
            Airgun Indonesia dibuka pada tahun 2017 oleh Travis Scott arya,
            Airgun Indonesia bergerak dalam bidang jual beli senapan pcp, pelet,
            Air Pitols, airguns, airsoft, paintball, blank gun, crossbows dan
            perlengkapan berburu.
          </p>
        </div>
      </Layout>
      <Layout
        className={`bg-primary-lighter text-secondary-lighter`}
        id={'product'}
      >
        <div className=" text-center font-bold py-10 lg:py-20">
          <p className="text-2xl py-5 uppercase">Daftar Produk Kami</p>
          <p className="text-md px-10 lg:px-5 lg:text-lg">
            Berikut beberapa produk pilihan semuanya masih tersedia dengan stok
            yang banyak dan berbagai rentang harga. Beli dan nikmati kualitas
            terbaik.
          </p>
        </div>
        <ProductList />
      </Layout>
      <Layout
        className={`bg-primary-lighter text-secondary-lighter pb-24`}
        id={'team'}
      >
        <div className=" text-center font-bold py-10">
          <p className="text-2xl py-5 uppercase">Meet Our Team!</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {teams.map((team) => (
            <TeamList
              key={team.id}
              name={team.nama}
              nim={team.nim}
              work={team.pekerjaan}
            />
          ))}
        </div>
      </Layout>
      <Layout
        className={`bg-primary-lighter text-secondary-lighter pb-24`}
        id="contact"
      >
        <Contact></Contact>
      </Layout>
      <Footer />
      <FooterLower />
    </>
  );
};

export default homepage;
