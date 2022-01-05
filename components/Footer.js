import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
export default function Footer() {
  return (
    <footer className="footer p-10 bg-primary text-secondary-lighter">
      <div className="grid grid-flow-col">
        <div className="flex justify-around gap-10">
          <div className="w-1/2 lg:w-1/4 text-lg">
            <span className="footer-title">About Us</span>
            <p className="text-justify">
              Airgun Indonesia dibuka pada tahun 2017 oleh Travis Scott arya,
              Airgun Indonesia bergerak dalam bidang jual beli senapan pcp,
              pelet, Air Pitols, airguns, airsoft, paintball, blank gun,
              crossbows dan perlengkapan berburu.
            </p>
          </div>
          <div className="text-lg xl:text-xl">
            <span className="footer-title">Reach Us</span>
            <p>+6288 7876 2321</p>
            <div className="grid grid-flow-col gap-4">
              <a href="#">
                <FacebookIcon></FacebookIcon>
              </a>
              <a href="#">
                <InstagramIcon></InstagramIcon>
              </a>
              <a href="#">
                <WhatsAppIcon></WhatsAppIcon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
