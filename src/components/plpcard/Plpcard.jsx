import React from 'react';
import Image from 'next/image';

function Plpcard({comp_data}) {
  return (
    <div className="plpcard group w-full max-h-[500] rounded-md">
        <a href='' className='#EBEBEB'>
        <Image
        className="company_picture w-full h-[396px] rounded-tr-md rounded-tl-md"
        src={comp_data.comp_picture}
        width={330}
        height={390}
        alt="microsoft image"
      />
        </a>
        <div className="job_details group-hover:bg-gradient-to-r from-[#7A4297] via-[#B1268C] to-[#DD242F] group-hover:text-white text-sm leading-normal py-2 px-4 bg-[#EBEBEB] rounded-br-md rounded-bl-md">
            <div className="company_name text-[#878787] text-sm font-bold font-medium">
            {comp_data.comp_name}
            </div>
            <div className="">
            {comp_data.job_title}
            </div>
            <div className='company_location'>
            {comp_data.location}
            </div>
            <div className='total_experience'>
            {comp_data.yr_exp}
            </div>
            <div className="price text-base text-[#212121]">
            {comp_data.price}
            </div>
        </div>
    </div>
  )
}

export default Plpcard