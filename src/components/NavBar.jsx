import React, { useState } from 'react';
import '../index.css';
import { IoMdMenu } from 'react-icons/io';
import { IoClose } from "react-icons/io5";

export const NavBar = ({count}) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <nav>
        <div className="hamburger-menu" onClick={toggleMenu}>
          {showMenu ? <IoClose size={30} /> : <IoMdMenu size={30}/>}
        </div>
        <ul className={`nav-left ${showMenu ? 'show' : ''}`}>
          <li className="nav-links">
            <a href="#">Home</a>
          </li>
          <li className="nav-links">
            <a href="#">Products</a>
          </li>
          <li className="nav-links">
            <a href="#">Support</a>
          </li>
          <li className="nav-links">
            <a href="#">Appliances</a>
          </li>
        </ul>
        <ul className={`nav-right ${showMenu ? 'show' : ''}`}>
          <li className="cart-link">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
              {count > 0 && <span className='cart-count'>{count}</span>}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
