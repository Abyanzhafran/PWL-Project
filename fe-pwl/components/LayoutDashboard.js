import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import GroupIcon from '@mui/icons-material/Group';
import ArticleIcon from '@mui/icons-material/Article';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function LayoutDashboard({ children }) {
  const btnSidebar = [
    {
      icon: <HomeIcon />,
      name: 'HOME',
      link: '/dashboardHome',
    },
    {
      icon: <Inventory2Icon />,
      name: 'PRODUCT',
      link: '/dashboardProduct',
    },
    {
      icon: <GroupIcon />,
      name: 'TIM',
      link: '/dashboardTeam',
    },
    {
      icon: <ArticleIcon />,
      name: 'EDIT HISTORY',
      link: '/dashboardHistory',
    },
  ];

  return (
    <>
      <div class="shadow bg-base-200 drawer drawer-mobile h-screen">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="flex flex-col items-center justify-center drawer-content">
          <div class="w-full navbar flex items-center bg-skyNight sticky top-0">
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
                <Link href={el.link}>
                  <a className="flex gap-3">
                    {el.icon}
                    {el.name}
                  </a>
                </Link>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
