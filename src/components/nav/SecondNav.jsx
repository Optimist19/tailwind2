import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

function SecondNav() {
  const [showNav, setShowNav] = useState(true);

  function showNavFtn() {
    setShowNav(!showNav);
  }

  return (
    <nav className="w-full">
      <header className="pt-3 px-2 sm:flex sm:justify-between sm:items-center md:px-4 md:pr-9">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl text-blue-700">INANCE</h1>
          <li className="list-none sm:hidden" onClick={showNavFtn}>
            {showNav ? (
              <FaTimes className="menu-open text-2xl" />
            ) : (
              <GiHamburgerMenu className="menu-close text-2xl" />
            )}
          </li>
        </div>

        {showNav && (
          <div className="flex justify-center">
            <ul className="flex flex-col items-center gap-3 sm:item-center sm:justify-between sm:flex-row">
              <li className="hover:text-blue-700 md:pr-4">Home</li>
              <li className="hover:text-blue-700 md:pr-4">About</li>
              <li className="hover:text-blue-700 md:pr-4">Services</li>
              <li className="hover:text-blue-700 md:pr-4">Contact Us</li>
            </ul>
          </div>
        )}
      </header>
    </nav>
  );
}

export default SecondNav;
