import React from 'react'
// import styles from './navbar.module.scss';
import Searchform from '../searchform/Searchform';
import Image from 'next/image'
import logo from '/public/logo.png'
import Dropdown from '../dropdown/Dropdown';
import carticon from '/public/cart.svg';
import profileicon from '/public/profile-icon.svg';

function Navbar() {
  return (
    <div className="navbar hidden md:block bg-gradient-to-r from-[#7A4297] via-[#B1268C] to-[#DD242F] mb-10">
     <div className="container text-white mx-5 flex justify-center items-center gap-10">
     <div>
        <Image
        src={logo}
        width={80}
        height={50}
        alt="logo image"
      />
        </div>
        <Searchform/>
     <div className="profile flex justify-center items-center">
        <Image
        src={profileicon}
        width={16}
        height={16}
        alt="profile image"
      />
        <Dropdown content={{title:"Govind kuma...",options:['My Profile','Orders','Notification','Logout']}}/>
        </div>
        <div className='referrer'>
          <a href=''>
          <span>Become a referrer</span>
          </a>
        </div>
        <Dropdown content={{title:"More",options:['Notiication Preferences','24x7 Customer Care','Advertise','Download App']}}/>

        <div className="cart">
          <a href='' className='flex justify-center gap-1'>
          <Image
        src={carticon}
        width={16}
        height={16}
        alt="logo image"
      />
          <span>Cart</span>
          </a>
        </div>
     </div>
    </div>
  )
}

export default Navbar