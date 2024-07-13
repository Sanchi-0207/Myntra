import React from 'react'
import { BsPerson } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsHandbag } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className="navBar h-24 p-3 flex justify-between shadow-2xl">
      <div className="left-list w-1/2 flex justify-between items-center ">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div>
          <p className="font-bold">Men</p>
        </div>
        <div>
          <Link to="/womensection">
            <p className="font-bold">Women</p>
          </Link>
        </div>
        <div>
          <p className="font-bold">Kids</p>
        </div>
        <div>
          <p className="font-bold">Home & Living</p>
        </div>
        <div>
          <p className="font-bold">Beauty</p>
        </div>
        <div>
          <p className="font-bold">Studio</p>
        </div>
      </div>

      <div className="right-list w-1/2 flex justify-between items-center">
        <div className="w-1/2 mx-auto search-box">
          <label
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
             <CiSearch/>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm border-gray-300 rounded-lg bg-gray-50 shadow dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 "
              placeholder="Search Mockups, Logos..."
              required
            />
          </div>
        </div>
        <div className="flex justify-between items-center w-1/4">
          <div className="flex flex-col justify-center items-center">
            <BsPerson />
            <p>Profile</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <IoIosHeartEmpty />
            <p>Wishlist</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <BsHandbag />
            <p>Bag</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar