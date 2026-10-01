import { ADD_ROUTE, navMenu } from "../contants/routes.js";
import { Link, useLocation } from "react-router";

const Header = () => {
  const location =  useLocation();
  return (
    <header className="bg-white fixed w-full  z-20 top-0 inset-s-0  shadow">
      <div className="container max-w-3xl  flex flex-wrap items-center justify-between mx-auto p-4">

    <h1 className="text-orange-500 text-xl font-semibold">Reminders</h1>

        <div className="inline-flex sm:order-2 space-x-3 sm:space-x-0 rtl:space-x-reverse">

          <Link 
           to={ADD_ROUTE}
            type="button"
            className="text-white bg-brand bg-orange-500 box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-sm px-3 py-2 focus:outline-none"
          >
            Add Reminder
          </Link>
        </div>

        <nav
          className="items-center justify-between hidden w-full sm:flex md:w-auto sm:order-1"
          id="navbar-cta"
        >
          <ul className="font-medium flex flex-col p-4 sm:p-0 mt-4 border border-default rounded-base  sm:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 sm:border-0">
            {navMenu.map((menu, index) => {
              const active = location.pathname == menu.route;
              return (
              <li key={index} className={active ? "text-orange-500" : ""}>
                <Link to={menu.route}>{menu.label}</Link>
              </li>
            )
            })}

          </ul>
        </nav>
        <nav
          className=" w-full sm:hidden"
        >
          <ul className="flex mt-2 pt-2 border-t border-gray-100 font-medium gap-5">
            {navMenu.map((menu, index) => {
              const active = location.pathname == menu.route;
              return (
              <li key={index} className={active ? "text-orange-500" : ""}>
                <Link to={menu.route}>{menu.label}</Link>
              </li>
            )
            })}

          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;