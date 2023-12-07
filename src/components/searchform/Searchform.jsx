import React from 'react';
import Searchicon from '/public/searchicon.svg';
// import styles from './searchform.module.scss'
import Image from 'next/image'

function Searchform() {
  return (
    <>
    <form type="submit" className="search_form">
        <div className=" flex justify-center">
            <input className='px-4 border-0 md:w-[350px] h-[40px] w-full rounded-tl-sm rounded-bl-sm text-black' type='text' placeholder='search your dream company' title='search for you dream company'/>
            <button className='cursor-pointer border-0 bg-white p-[5px] pr-3 pb-0.5 rounded-tr-sm rounded-br-sm'>
            <Image
        src={Searchicon}
        width={20}
        height={20}
        alt="search icon"
      />
            </button>
        </div>
    </form>
    </>
  )
}

export default Searchform

