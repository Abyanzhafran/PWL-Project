import { Link } from 'react-scroll';
import Ling from 'next/link';
import SearchIcon from '@mui/icons-material/Search';

export default function Navbar() {
  return (
    <div className="navbar shadow-lg bg-primary text-secondary sticky top-0 z-10">
      <div className="navbar-start px-2 mx-2 ">
        <span className="text-lg">AirGun</span>
      </div>
      <div className="hidden navbar-center lg:flex">
        <div className="flex items-center">
          <Link to="top" smooth={true} duration={250}>
            <a className="btn btn-ghost btn-sm">Home</a>
          </Link>
          <Link to="about" smooth={true} duration={250}>
            <a className="btn btn-ghost btn-sm">About</a>
          </Link>
          <Link to="product" smooth={true} duration={250}>
            <a className="btn btn-ghost btn-sm">Product</a>
          </Link>
          <Link to="team" smooth={true} duration={250}>
            <a className="btn btn-ghost btn-sm">Team</a>
          </Link>
          <Link to="contact" smooth={true} duration={250}>
            <a className="btn btn-ghost btn-sm">Contact</a>
          </Link>
        </div>
      </div>
      <div className="navbar-end">
        <div className="flex-1 hidden sm:flex lg:flex-none">
          <div className="form-control">
            <input
              type="text"
              name="search"
              id="textSearch"
              className="input input-ghost"
              placeholder="Cari"
            />
          </div>
        </div>
        <div className="flex-none">
          <div className="btn-group">
            <button className="btn btn-square btn-ghost">
              <SearchIcon />
            </button>
            <div className="divider divider-vertical"></div>
            <Ling href="/login">
              <button className="btn btn-ghost">Login Team</button>
            </Ling>
          </div>
        </div>
      </div>
    </div>
  );
}
