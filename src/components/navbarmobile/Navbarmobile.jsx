import React from "react";
// import styles from './navbar.module.scss';
import Searchform from "../searchform/Searchform";
import Image from "next/image";
import logo from "/public/logo.png";
import Dropdown from "../dropdown/Dropdown";
import carticon from "/public/cart.svg";
import profileicon from "/public/profile-icon.svg";
import hamburger from "/public/hamburger.svg";

function Navbarmobile() {
  return (
    <div className="navbar block md:hidden bg-gradient-to-r from-[#7A4297] via-[#B1268C] to-[#DD242F] mb-10">
      <div className="text-white">
        <div className="upper flex justify-between items-center py-2 pr-4">
            <div className="">
              <Image src={logo} width={60} height={50} alt="logo image" />
          </div>
          <div className="flex justify-center items-center gap-6">
            <div className="">
              <Image
                src={profileicon}
                width={20}
                height={20}
                alt="profile image"
              />
            </div>
            <div className="">
              <Image src={carticon} width={20} height={20} alt="logo image" />
            </div>
            <div className="">
              <Image src={hamburger} width={20} height={20} alt="logo image" />
            </div>
          </div>
        </div>
        <div className="lower p-2">
          <Searchform />
        </div>
      </div>
    </div>
  );
}

export default Navbarmobile;
