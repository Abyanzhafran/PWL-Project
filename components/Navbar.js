import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';

export default function Navbar() {
  return (
    <div className="navbar shadow-lg  bg-primary text-secondary sticky top-0 z-50">
      <div className="navbar-start px-2 mx-2">
        <span className="text-lg">AirGun</span>
      </div>
      <div className="hidden navbar-center lg:flex">
        <div className="flex items-stretch">
          <a href="#" className="btn btn-ghost btn-md">
            Home
          </a>
          <a href="#" className="btn btn-ghost btn-md">
            Product
          </a>
          <a href="#" className="btn btn-ghost btn-md">
            Cart
          </a>
          <a href="#" className="btn btn-ghost btn-md">
            Contact
          </a>
          <a href="#" className="btn btn-ghost btn-md">
            About
          </a>
        </div>
      </div>
      <div className="navbar-end">
        <div className="flex-1 lg:flex-none">
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
            <Link href="/login">
              <button className="btn btn-ghost">Login Team</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
