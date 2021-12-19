import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import GroupIcon from '@mui/icons-material/Group';
import CallIcon from '@mui/icons-material/Call';

export default function LayoutDashboard({ children }) {
  const btnSidebar = [
    {
      icon: <LoginIcon />,
      name: 'LOGIN',
      link: '/dashboard',
    },
    {
      icon: <HomeIcon />,
      name: 'HOME',
      link: '/dashboard',
    },
    {
      icon: <Inventory2Icon />,
      name: 'PRODUCT',
      link: '/dashboard',
    },
    {
      icon: <GroupIcon />,
      name: 'TIM',
      link: '/dashboard',
    },
    {
      icon: <CallIcon />,
      name: 'CONTACT US',
      link: '/dashboard',
    },
  ];

  return (
    <>
      <div class="rounded-lg shadow bg-base-200 drawer h-screen">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="flex flex-col drawer-content">
          <div class="w-full navbar bg-base-300">
            <div class="flex-none lg:hidden">
              <label for="my-drawer-3" class="btn btn-square btn-ghost">
                <MenuIcon />
              </label>
            </div>
            <div class="flex-1 px-2 mx-2">
              <span>Change screen size to show/hide menu</span>
            </div>
            <div class="flex-none hidden lg:block">
              <ul class="menu horizontal">
                <li>
                  <a class="rounded-btn">Item 1</a>
                </li>
                <li>
                  <a class="rounded-btn">Item 2</a>
                </li>
              </ul>
            </div>
          </div>
          <main className="flex h-full w-full justify-center items-center">
            {children}
          </main>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-3" class="drawer-overlay"></label>
          <ul class="p-4 overflow-y-auto menu w-80 bg-base-100">
            <div>
              <span className="text-xl font-bold">Dashboard</span>
            </div>
            <div class="divider" />
            <li>
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
