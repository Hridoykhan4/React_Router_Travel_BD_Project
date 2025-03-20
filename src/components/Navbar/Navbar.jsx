import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500 font-bold underline" : "text-black"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500 font-bold underline" : "text-black"
          }
          to="/listedPlaces"
        >
          Listed Places
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500 font-bold underline" : "text-black"
          }
          to="/dashboard"
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar p-0 w-11/12 items-center mx-auto">
      <div className="navbar-start">
        <a className="flex-1 text-xl">Cholo Ghure Ashi 🤍</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Places</a>
        <div className="dropdown dropdown-end ms-4">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="flex flex-col dropdown-content bg-base-100 p-2 rounded-box shadow text-right text-xl w-52 font-semibold items-end menu menu-sm mt-3 right-0 space-y-3 z-10"
          >
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
