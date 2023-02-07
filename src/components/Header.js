import React from 'react';
import { AiOutlineSetting } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";

const Header = () => {
  return (
    <nav>
      <div className='backIcon'>
        <IoIosArrowBack />
      </div>
      <div className='pageTitle'>
        <p>Cryptobillia</p>
      </div>
      <div className='navIcons'>
        <BiMicrophone />
        <AiOutlineSetting />
      </div>
    </nav>
  )
}

export default Header;