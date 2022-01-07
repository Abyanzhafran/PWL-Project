import Navbar from '../components/Navbar';
export const getServerSideProps = async (ctx) => {
  <Navbar></Navbar>;
  return {
    props: {
      data: null,
    },
  };
};
