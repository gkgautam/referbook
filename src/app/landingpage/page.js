import Navbar from '@/components/navbar/Navbar';
import Plppage from '@/components/plppage/Plppage';
import React from 'react';

function page() {
  return (
    <div>
      {/* I am landing page */}
      <Navbar/>
      <div className='content-container'>
        <Plppage/>
       </div>
    </div>
  )
}

export default page