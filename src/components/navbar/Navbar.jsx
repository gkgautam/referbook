import React from 'react'
import styles from './navbar.module.scss';
import Searchform from '../searchform/Searchform';
import Image from 'next/image'
import logo from '../../../public/logo.png'
import Dropdown from '../dropdown/Dropdown';
import carticon from '../../../public/cart.svg';
import profileicon from '../../../public/profile-icon.svg';


function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div>
        <Image
        src={logo}
        width={100}
        height={50}
        alt="logo image"
      />
        </div>
        <Searchform/>
        <div className={styles.profile}>
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

        <div className={styles.cart}>
          <a href=''>
          <Image
        src={carticon}
        width={16}
        height={16}
        alt="logo image"
      />
          <span>Cart</span>
          </a>
        </div>
      {/* Hi I am header component2 */}
      </div>
    </div>
  )
}

export default Navbar