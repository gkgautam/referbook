import Navbar from '@/components/navbar/Navbar';
import React from 'react';
import Plppage from '@/components/plppage/Plppage';

function page() {
  return (
    <div>
        <Navbar/>
       <div className='content-container'>
       <Plppage/>
       </div>
    </div>
  )
}

export default page