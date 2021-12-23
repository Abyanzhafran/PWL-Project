import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import GroupIcon from '@mui/icons-material/Group';
import CallIcon from '@mui/icons-material/Call';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function LayoutDashboard({ children }) {
  const btnSidebar = [
    {
      icon: <LoginIcon />,
      name: 'LOGIN',
      link: '/dashboard_product',
    },
    {
      icon: <HomeIcon />,
      name: 'HOME',
      link: '/dashboard_product',
    },
    {
      icon: <Inventory2Icon />,
      name: 'PRODUCT',
      link: '/dashboard_product',
    },
    {
      icon: <GroupIcon />,
      name: 'TIM',
      link: '/dashboard_product',
    },
    {
      icon: <CallIcon />,
      name: 'CONTACT US',
      link: '/dashboard_product',
    },
  ];

  return (
    <>
      <div class="shadow bg-base-200 drawer drawer-mobile h-screen">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="flex flex-col items-center justify-center drawer-content">
          <div class="w-full navbar flex items-center bg-skyNight">
            <div class="flex-none lg:hidden">
              <label for="my-drawer-2" class="btn btn-square btn-ghost">
                <MenuIcon className="text-white" />
              </label>
            </div>
            <div class="flex-1 px-2 mx-2">
              <img src="/airGunIndo.png" className="w-32" />
            </div>
            <button class="flex items-center">
              <div class="avatar">
                <div class="rounded-full w-8 mt-1">
                  <img src="http://daisyui.com/tailwind-css-component-profile-5@56w.png" />
                </div>
              </div>
              <ArrowDropDownIcon className="text-white" />
            </button>
          </div>
          <main className="flex h-full w-full justify-center items-start bg-gray-50">
            {children}
          </main>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-skyNight text-base-content">
            <div>
              <span className="text-xl font-bold text-white">Dashboard</span>
            </div>
            <div className="border-b-2 bg-white my-4" />
            <li className="text-white">
              {btnSidebar.map((el) => (
                <a className="flex gap-3" href={el.link}>
                  {el.icon}
                  {el.name}
                </a>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
