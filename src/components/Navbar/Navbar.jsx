import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md py-2 px-10">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Amajhon
            </span>
          </a>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
           
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-green-300" : ""
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-green-300" : ""
                }
              >
                Products
              </NavLink>
              <NavLink
                to="/About"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-green-300" : ""
                }
              >
                About
              </NavLink>
              <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "bg-green-300" : ""
                }
              >
                Dashboard
              </NavLink>
       
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
