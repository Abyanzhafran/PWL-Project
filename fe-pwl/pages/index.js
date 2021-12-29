import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
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
      <Layout className={`bg-primary`}>
        <Hero />
      </Layout>
      <Layout className={`bg-primary-lighter text-secondary-lighter`}>
        <div className="pt-10 pb-12">
          <div className="pb-6">
            <span className="font-bold text-4xl text-secondary-lighter">
              STEYR AIR RIFLES
            </span>
          </div>
          <p className="text-lg">
            Senapan Udara Steyr untuk Berburu & Target adalah salah satu Senjata
            Udara kelas tertinggi yang tersedia di pasar dan merupakan standar
            Olimpiade. Dengan styre Air Rifles mereka dibuat bagian demi bagian,
            sekrup demi sekrup, sentuhan demi sentuhan, yang akan memberi
            pemilik dan penembak masa depan segala yang diperlukan untuk sukses
            besar, apakah itu yang terbaik pribadi atau rekor dunia! Tak perlu
            khawatir... Anda bisa yakin akan kualitasnya dengan Steyr Air
            Rifles. Setelah Anda memegang dan menggunakan styre Air Rifles, Anda
            akan memahami betapa pentingnya setiap komponen dan penyesuaian
            idealnya untuk keseluruhan produk. STEYR SPORT mewakili kelas
            tersendiri dalam hal kualitas pengerjaan.
          </p>
        </div>
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
        <ProductList />
      </Layout>
      <Layout className={`bg-primary-lighter text-secondary-lighter pb-24`}>
        <div className=" text-center font-bold py-10">
          <p className="text-2xl py-5 uppercase">Meet Our Team!</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {teams.map((team) => (
            <TeamList name={team.nama} nim={team.nim} />
          ))}
        </div>
      </Layout>
      <Footer />
      <FooterLower />
    </>
  );
};

export default homepage;
