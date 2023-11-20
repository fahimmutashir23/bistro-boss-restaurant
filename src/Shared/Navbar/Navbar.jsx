import { Link, NavLink } from "react-router-dom";
import { BsCartCheckFill } from "react-icons/bs";
import logo from "../../assets/logo.png";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const navItem = (
    <>
      <li>
        <NavLink to="/" className="rounded-lg">
          home
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="rounded-lg">
          Contact Us
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/dashboard/userHome" className="rounded-lg">
            Dashboard
          </NavLink>
        </li>
      )}
      <li>
        <NavLink to="/menu" className="rounded-lg">
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink to="/shop" className="rounded-lg">
          Our Shop
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/cart" className="rounded-lg">
          <BsCartCheckFill className="text-xl"></BsCartCheckFill>
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-black text-white fixed w-full max-w-6xl z-10 bg-opacity-40">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <img src={logo} alt="" className="w-16" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="User image" src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-70 text-white rounded-box"
              >
                <li className="hover:bg-base-200">
                  <Link className="justify-between">
                    {user?.displayName}
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li className="hover:bg-base-200">
                  <a>Settings</a>
                </li>
                <li className="hover:bg-base-200">
                  <button onClick={() => logOut()} className="">
                    LogOut
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary rounded-md">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
