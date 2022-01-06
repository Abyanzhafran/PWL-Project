import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="navbar shadow-lg  bg-primary text-secondary sticky top-0 z-10">
      <div className="navbar-start px-2 mx-2">
        <span className="text-lg">AirGun</span>
      </div>
      <div className="hidden navbar-center lg:flex">
        <div className="flex items-stretch">
          <Link href="/#top">
            <a className="btn btn-ghost btn-md">Home</a>
          </Link>
          <Link href="/#about">
            <a className="btn btn-ghost btn-md">About</a>
          </Link>
          <Link href="#product">
            <a className="btn btn-ghost btn-md">Product</a>
          </Link>
          <Link href="/#contact">
            <a href="#" className="btn btn-ghost btn-md">
              Contact
            </a>
          </Link>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
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
