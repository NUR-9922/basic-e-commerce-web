import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AddTaskIcon from "@mui/icons-material/AddTask";
import LinearScaleOutlinedIcon from "@mui/icons-material/LinearScaleOutlined";
import { Menu } from "@mui/material";
import Search from "./Search/Search";
function Navbar() {
  const [menu, setMenu] = useState(false);
  const [accountDropdown, setAccountDropdown] = useState(false);
  return (
    <nav className="navbar sticky top-0 z-[100]  w-full px-2 pr-5 p-3 pt-4 bg-[#ffff]  flex items-center justify-between font-[Poppins] text-[15px]">
      {/* navbar__left  */}
      <div className="navbar__left flex items-center justify-center gap-3">
        <div className="w-40 bg-blend-screen items-center justify-center">
          <Link to={'/'}>
            <div className="w-40">
              {" "}
              <img
                className="w-40 h-full object-cover"
                src="./public/logo/logo.png"
                alt=""
              />
            </div>
          </Link>
        </div>
        <div className="hidden md:flex items-center justify-center gap-2 font-[500]">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-[#383838]"
            }
          >
            <li className=" flex justify-center items-center gap-1 cursor-pointer">
              {" "}
              <i className="ri-home-line"></i> Home
            </li>
          </NavLink>
          <NavLink
            to={"/category"}
            className={({ isActive }) =>
              isActive ? "text-primary" : "text-[#383838]"
            }
          >
            <li className=" flex justify-center items-center gap-1 cursor-pointer">
              {" "}
              <i className="ri-fire-line"></i> All Categories
            </li>
          </NavLink>
        </div>
        <div>
          <Search />
        </div>
      </div>

      {/* nav right part */}
      <div className="navbar__right flex items-center text-xl md:text-base gap-2 md:gap-5 font-[500] capitalize relative ">
        <button className="hover:bg-primary group/item w-32 h-10 rounded-lg hover:text-white transition-all group hidden lg:block">
          <li className=" flex justify-center items-center gap-1 cursor-pointer capitalize">
            <i className="ri-user-line"></i> account{" "}
            <i className="ri-arrow-down-s-line group-hover:rotate-180 transition-all"></i>
          </li>
          {/* dropdown menu with icons [remix icons] */}
          <ul className=" absolute top-[43px] w-72 left-[-30px] scale-0  group-hover/item:scale-100  origin-top-left duration-100 bg-white text-[#383838] rounded-lg text-left  shadow-inner overflow-hidden">
            {/* my profile */}
            <NavLink
              to={"/profile"}
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-[#383838]"
              }
            >
              <li className="my_profile px-4 pt-3 pb-3 hover:bg-primary hover:text-white">
                <i className="ri-user-line"></i> My profile
              </li>
            </NavLink>
            {/* mebership */}
            <NavLink
              to={"/mebership"}
              className={`  ({ isActive }) => isActive ? 'text-primary' : 'text-[#383838] '`}
            >
              <li className="my_profile px-4 pt-3 pb-3 hover:bg-primary hover:text-white">
                <AddTaskIcon fontSize="10px" /> mebership exclusive offer
              </li>
            </NavLink>
            {/* orders  */}
            <NavLink
              to={"/orders"}
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-[#383838]"
              }
            >
              <li className="my_profile px-4 pt-3 pb-3 hover:bg-primary hover:text-white">
                <i className="ri-instance-line"></i> orders
              </li>
            </NavLink>
            {/* wishlist  */}
            <NavLink
              to={"/wishlist"}
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-[#383838]"
              }
            >
              <li className="my_profile px-4 pt-3 pb-3 hover:bg-primary hover:text-white">
                <i className="ri-heart-3-line"></i> wishlist
              </li>
            </NavLink>
            {/* your rewords  */}
            <NavLink
              to={"/rewords"}
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-[#383838]"
              }
            >
              <li className="my_profile px-4 pt-3 pb-3 hover:bg-primary hover:text-white">
                <i className="ri-medal-line"></i> your rewords
              </li>
            </NavLink>
            {/* your earing or money */}
            <NavLink
              to={"/earning"}
              className={`  ({ isActive }) => isActive ? 'text-primary' : 'text-[#383838]'`}
            >
              <li className="my_profile px-4 pt-3 pb-3 hover:bg-primary hover:text-white">
                <i className="ri-money-dollar-circle-line"></i> your earing or
                money
              </li>
            </NavLink>
          </ul>
        </button>

        <NavLink
          to={"/cart"}
          className={({ isActive }) =>
            isActive ? "text-primary" : "text-[#383838]"
          }
        >
          <li className=" flex justify-center items-center gap-1 cursor-pointer">
            {" "}
            <i className="ri-shopping-cart-line"></i> Cart
          </li>
        </NavLink>



        {/* menu for notification and 24/7 support stc dropdown menu */}
        <div className="relative group/notification-and-24-7-support-menu text-left capitalize hidden md:block">
          <div className=" cursor-pointer font-bold border-[1px] mr-[-10px] rounded-md border-transparent hover:border-[#c2c2c2] transition-all rotate-90">
            <LinearScaleOutlinedIcon fontSize="medium" className="rotate-180" />
          </div>
          <ul className=" absolute w-52  top-6 right-[-13px] scale-0  group-hover/notification-and-24-7-support-menu:scale-100  origin-top-right duration-100 bg-white text-[#383838] rounded-lg text-left  shadow-inner overflow-hidden">
            <li className=" hover:bg-primary hover:text-white flex gap-2 pt-3 pb-3 px-3 cursor-pointer">
              <i className="ri-notification-3-line"></i>
              <p>notification</p>
            </li>
            <li className=" hover:bg-primary hover:text-white flex gap-2 pt-3 pb-3 px-3 cursor-pointer">
              <i className="ri-customer-service-line"></i>
              <p>24/7 support</p>
            </li>
            <li className=" hover:bg-primary hover:text-white flex gap-2 pt-3 pb-3 px-3 cursor-pointer">
              <i className="ri-download-line"></i>
              <p>Download our app</p>
            </li>
          </ul>
        </div>




        {/* right to left slide menu */}
        <div className={`md:hidden `}>
          <i
            onClick={() => setMenu(!menu)}
            className="ri-menu-line cursor-pointer text-xl border-[1px] p-2 rounded-md border-transparent hover:border-[#c2c2c2] transition-all"
          ></i>
          {/* slider menu for mobile with clone icon */}
          <div
            className={`fixed w-72 h-screen bg-white top-0 overflow-auto ${menu ? "right-0" : "right-[-300px]"
              } duration-150`}
          >
            <div className=" flex justify-end px-2 text-3xl font-extrabold">

              {/* close menu icon */}
              <i
                onClick={() => setMenu(!menu)}
                className={`ri-close-line text-left cursor-pointer text-2xl  p-2  duration-100 ${menu ? "rotate-180" : "rotate-0"
                  }`}
              ></i>
            </div>
            <ul className="">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-[#383838]"
                }
              >
                <li className=" hover:bg-primary hover:text-white flex gap-2 pt-3 pb-3 px-3 cursor-pointer">
                  <i className="ri-home-5-line"></i>
                  <p>Home</p>
                </li>
              </NavLink>
              <NavLink
                to={"/Categories"}
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-[#383838]"
                }
              >
                <li className=" hover:bg-primary hover:text-white flex gap-2 pt-3 pb-3 px-3 cursor-pointer">
                  <i className="ri-fire-line"></i>
                  <p>All Categories</p>
                </li>
              </NavLink>
              <NavLink
                to={"/cart"}
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-[#383838]"
                }
              >
                <li className=" hover:bg-primary hover:text-white flex gap-2 pt-3 pb-3 px-3 cursor-pointer">
                  <i className="ri-shopping-cart-2-line"></i>
                  <p>Cart</p>
                </li>
              </NavLink>
              <NavLink
                to={"/wishlist"}
                className={({ isActive }) =>
                  isActive ? "text-primary" : "text-[#383838]"
                }
              >
                <li className=" hover:bg-primary hover:text-white flex gap-2 pt-3 pb-3 px-3 cursor-pointer">
                  <i className="ri-heart-line"></i>
                  <p>Wishlist</p>
                </li>
              </NavLink>
              <li className="relative flex flex-col  gap-2 pt-3 pb-3 px-3 cursor-pointer">
                <div
                  onClick={() => {
                    setAccountDropdown(!accountDropdown);
                  }}
                  className={`flex `}
                >
                  <div className="flex gap-2">
                    <i className="ri-user-line"></i>

                    <p className="capitalize">Account</p>
                  </div>
                  <i
                    className={`ri-arrow-down-s-line absolute right-3 duration-200 ${accountDropdown ? "rotate-180" : ""
                      }`}
                  ></i>
                </div>

                {/* account dropdown */}
                <ul
                  className={` ${accountDropdown ? "block" : "hidden"
                    }   transition-all  duration-200 bg-white text-[#383838]  text-left text-base mt-5`}
                >
                  {/* my profile */}
                  <NavLink
                    to={"/profile"}
                    className={({ isActive }) =>
                      isActive ? "text-primary" : "text-[#383838]"
                    }
                  >
                    <li className="hover:bg-primary hover:text-white flex gap-2 pt-3 pb-3 px-4 cursor-pointer">
                      <i className="ri-user-line"></i> My profile
                    </li>
                  </NavLink>
                  {/* mebership */}
                  <NavLink
                    to={"/mebership"}
                    className={`  ({ isActive }) => isActive ? 'text-primary' : 'text-[#383838] '`}
                  >
                    <li className="hover:bg-primary hover:text-white flex gap-2 pt-3 pb-3 px-4 cursor-pointer">
                      <AddTaskIcon fontSize="10px" /> mebership exclusive offer
                    </li>
                  </NavLink>
                  {/* orders  */}
                  <NavLink
                    to={"/orders"}
                    className={({ isActive }) =>
                      isActive ? "text-primary" : "text-[#383838]"
                    }
                  >
                    <li className="hover:bg-primary hover:text-white flex gap-2 pt-3 pb-3 px-4 cursor-pointer">
                      <i className="ri-instance-line"></i> orders
                    </li>
                  </NavLink>
                  {/* wishlist  */}
                  <NavLink
                    to={"/wishlist"}
                    className={({ isActive }) =>
                      isActive ? "text-primary" : "text-[#383838]"
                    }
                  >
                    <li className="hover:bg-primary hover:text-white flex gap-2 pt-3 pb-3 px-4 cursor-pointer">
                      <i className="ri-heart-3-line"></i> wishlist
                    </li>
                  </NavLink>
                  {/* your rewords  */}
                  <NavLink
                    to={"/rewords"}
                    className={({ isActive }) =>
                      isActive ? "text-primary" : "text-[#383838]"
                    }
                  >
                    <li className="hover:bg-primary hover:text-white flex gap-2 pt-3 pb-3 px-4 cursor-pointer">
                      <i className="ri-medal-line"></i> your rewords
                    </li>
                  </NavLink>
                  {/* your earing or money */}
                  <NavLink
                    to={"/earning"}
                    className={`  ({ isActive }) => isActive ? 'text-primary' : 'text-[#383838]'`}
                  >
                    <li className="hover:bg-primary hover:text-white flex gap-2 pt-3 pb-3 px-4 cursor-pointer">
                      <i className="ri-money-dollar-circle-line"></i> your
                      earing or money
                    </li>
                  </NavLink>
                </ul>
              </li>

              <NavLink to={"/notification"}>
                <li className=" hover:bg-primary hover:text-white flex gap-2 pt-3 pb-3 px-3 cursor-pointer">
                  <i className="ri-notification-3-line"></i>
                  <p>notification</p>
                </li>
              </NavLink>

              <NavLink to={"/support"}>
                <li className=" hover:bg-primary hover:text-white flex gap-2 pt-3 pb-3 px-3 cursor-pointer">
                  <i className="ri-customer-service-line"></i>
                  <p>24/7 support</p>
                </li>
              </NavLink>
              <NavLink to={"/app-download"}>
                <li className=" hover:bg-primary hover:text-white flex gap-2 pt-3 pb-3 px-3 cursor-pointer">
                  <i className="ri-download-line"></i>
                  <p>Download our app</p>
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
