import Link from "next/link";
import Image from "next/image";
import { CiLogout } from "react-icons/ci";
import { SidebarItem } from "./SidebarItem";
import path from "path";
import {
  IoBasketOutline,
  IoCalendarOutline,
  IoCheckboxOutline,
  IoCodeWorkingOutline,
  IoListOutline,
} from "react-icons/io5";

const menuItem = [
  {
    icon: <IoCalendarOutline />,
    path: "/dashboard",
    title: "Dashboard",
  },
  {
    icon: <IoCheckboxOutline />,
    path: "/dashboard/rest-todos",
    title: "Rest TODOS",
  },
  {
    icon: <IoListOutline />,
    path: "/dashboard/server-todos",
    title: "Server Actions",
  },
  {
    icon: <IoCodeWorkingOutline />,
    path: "/dashboard/cookies",
    title: "Cookies",
  },
  {
    icon: <IoBasketOutline />,
    path: "/dashboard/products",
    title: "Products",
  },
];

export const Sidebar = () => {
  return (
    <>
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r border-gray-200 bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="-mx-6 px-6 py-4">
            <Link href="/dashboard" title="home">
              <Image
                src="https://raw.githubusercontent.com/Meschacirung/Tailus-website/f59a4b3ecc1ad9f6a2b0ad9e3fca6f957140cc4d/public/images/logo.svg"
                className="w-32"
                alt="tailus logo"
                width={150}
                height={150}
              />
            </Link>
          </div>

          <div className="mt-8 text-center">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
              alt="Profile image"
              className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
              width={150}
              height={150}
            />
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
              Cynthia J. Watts
            </h5>
            <span className="hidden text-gray-400 lg:block">Admin</span>
          </div>

          <ul className="space-y-2 tracking-wide mt-8">
            {menuItem.map((item) => (
              <SidebarItem key={item.path} {...item} />
            ))}
          </ul>
        </div>

        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t border-gray-200">
          <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <CiLogout />
            <span className="group-hover:text-gray-700">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};
