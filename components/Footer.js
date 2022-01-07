import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
export default function Footer() {
  return (
    <footer className="footer p-10 bg-primary text-secondary-lighter">
      <div className="grid grid-flow-col">
        <div className="flex justify-around gap-10">
          <div className="w-1/2 lg:w-1/4 text-lg">
            <span className="footer-title">Air Gun Indonesia</span>
            <p className="text-left">
              Istana Ps. Baru, <br></br> Jl. Pintu Air Raya No.64, RT.6/RW.1,
              Ps. Baru, Kecamatan Sawah Besar, Kota Jakarta Pusat, Daerah Khusus
              Ibukota Jakarta
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
