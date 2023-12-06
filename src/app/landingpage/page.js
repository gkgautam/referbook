import Navbar from '@/components/navbar/Navbar';
import Navbarmobile from '@/components/navbarmobile/Navbarmobile';
import Plppage from '@/components/plppage/Plppage';
import React from 'react';
import Login from '../login/Login';

function page() {
  return (
    <div>
      {/* I am landing page */}
      <Navbar/>
      <Navbarmobile/>
      <div className='content-container'>
        <Login/>
        <Plppage/>
       </div>
    </div>
  )
}

export default page