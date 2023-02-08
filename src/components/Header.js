import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiMicrophone } from 'react-icons/bi';
import { IoIosArrowBack } from 'react-icons/io';
import logoImg from '../assets/logo.png';

const Header = () => {
  const location = useLocation();

  return (
    <nav>
      {location.pathname !== '/' && (
        <div className="headerBackIcon">
          <NavLink to="/">
            <IoIosArrowBack />
          </NavLink>
        </div>
      )}
      <div className="pageTitle">
        <img src={logoImg} alt="logo" />
      </div>
      <div className="navIcons">
        <BiMicrophone />
        <AiOutlineSetting />
      </div>
    </nav>
  );
};

export default Header;
