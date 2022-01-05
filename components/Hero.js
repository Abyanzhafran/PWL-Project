import Carousel from './Carousel';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import DoneAllIcon from '@mui/icons-material/DoneAll';
export default function Hero() {
  return (
    <div className="hero bg-primary text-secondary-lighter">
      <div className="flex-col hero-content lg:flex-row-reverse justify-between">
        <div className="lg:w-1/2">
          <Carousel></Carousel>
        </div>
        <div>
          <h1 className="text-5xl font-bold mb-5">
            AIR GUN <br></br> INDONESIA
          </h1>
          <p className="mb-5 lg:w-1/2">
            Pengalaman bermain senapan yang Lebih Baik dengan produk asli lokal
            dan luar negeri.
          </p>
          <button className="btn bg-tertriary mb-5">
            Buy Now{' '}
            <span className="ml-3">
              <SouthEastIcon></SouthEastIcon>
            </span>
          </button>
          <div className="flex justify-between pb-5 lg:pb-0 lg:w-3/4">
            <div>
              <span className="mr-2">
                <DoneAllIcon></DoneAllIcon>
              </span>
              Fast Respon
            </div>
            <div>
              <span className="mr-2">
                <DoneAllIcon></DoneAllIcon>
              </span>
              100% Terpercaya
            </div>
            <div>
              <span className="mr-2">
                <DoneAllIcon></DoneAllIcon>
              </span>
              Bergaransi
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
