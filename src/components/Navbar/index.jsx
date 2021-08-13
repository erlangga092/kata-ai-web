/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

const NavLink = ({ link, textLink }) => {
  return (
    <li>
      <a href={link} className="text-sm text-gray-700 font-medium">
        {textLink}
      </a>
    </li>
  );
};

const Navbar = () => {
  return (
    <header className="w-full t-0 l-0 fixed px-10 py-6 bg-white">
      <nav className="w-full h-full grid grid-cols-4 align-items justify-center mx-auto">
        <section className="col-span-1 m-auto">
          <h1 className="text-gray-700 font-medium">Kata AI</h1>
        </section>
        <section className="col-span-2 w-full h-full">
          <ul className="w-full flex items-center justify-around">
            <NavLink link="https://reactjs.org" textLink="Solutions" />
            <NavLink link="https://reactjs.org" textLink="Industries" />
            <NavLink link="https://reactjs.org" textLink="Products" />
            <NavLink link="https://reactjs.org" textLink="Pricing" />
            <NavLink link="https://reactjs.org" textLink="Resources" />
            <NavLink link="https://reactjs.org" textLink="Company" />
          </ul>
        </section>
        <section className="col-span-1 mx-auto my-auto">
          <h3 className="text-sm text-gray-700 font-medium">Contact Us</h3>
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
