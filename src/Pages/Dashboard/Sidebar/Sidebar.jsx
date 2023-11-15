import { Link, NavLink } from "react-router-dom";
import {
  FaCalendar,
  FaCalendarCheck,
  FaCartPlus,
  FaDollarSign,
  FaHome,
} from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { AiFillShop, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="">
      <div className="md:hidden py-8 px-3 absolute">
        <button onClick={handleMenu}>
          <AiOutlineMenu></AiOutlineMenu>
        </button>
      </div>

      <div className={`w-[280px] bg-orange-500 min-h-screen ${open && "-translate-x-72"} transition duration-1000 md:block pt-8`}>
        <div className="mb-8">
          <h1 className="font-bold text-2xl text-center">BISTRO BOSS</h1>
          <h1 className="font-semibold text-xl text-center uppercase">
            restaurant
          </h1>
        </div>
        <div className="flex flex-col">
          <div>
            <ul className=" space-y-2 menu">
              <li>
                <NavLink
                  to="userHome"
                  className="flex items-center gap-3 text-lg font-medium uppercase"
                >
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="reservation"
                  className="flex items-center gap-3 text-lg font-medium uppercase"
                >
                  <FaCalendar></FaCalendar> reservation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="payment"
                  className="flex items-center gap-3 text-lg font-medium uppercase"
                >
                  <FaDollarSign></FaDollarSign> payment history
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/cart"
                  className="flex items-center gap-3 text-lg font-medium uppercase"
                >
                  <FaCartPlus></FaCartPlus> my cart
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="review"
                  className="flex items-center gap-3 text-lg font-medium uppercase"
                >
                  <BsStars></BsStars> add review
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="booking"
                  className="flex items-center gap-3 text-lg font-medium uppercase"
                >
                  <FaCalendarCheck></FaCalendarCheck> my booking
                </NavLink>
              </li>
            </ul>
            <hr className="my-4" />
          </div>

          <div className="">
            <ul className="menu">
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-3 text-lg font-medium uppercase"
                >
                  <FaHome></FaHome> Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-3 text-lg font-medium uppercase"
                >
                  <AiOutlineMenu></AiOutlineMenu> Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-3 text-lg font-medium uppercase"
                >
                  <AiFillShop></AiFillShop> Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-3 text-lg font-medium uppercase"
                >
                  <AiOutlineMail></AiOutlineMail> Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
