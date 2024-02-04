import React from "react";
// import styles from './dropdown.module.scss'

function Dropdown({content}) {
  return (
    <div>
      <div className="group dropdown relative flex justify-center items-center">
        <button className="dropbtn bg-transparent text-white py-4 px-1 text-base border-0">{content.title}</button>
        <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="zZ3yfL rotate-[-90deg] group-hover:rotate-90"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" className="_2gTTdy"></path></svg>
        <div className="dropdown_content mt-[14.5rem] rounded-sm fixed z-1 bg-white min-w-[160px] hidden group-hover:block shadow-[0_8px_16px_0px_rgba(0,0,0,0.2)]">
{
  content.options.map((item)=><a key={item} href={`/${content.link}`} className="hover:text-white hover:bg-gradient-to-r from-[#7A4297] via-[#B1268C] to-[#DD242F] no-underline block text-black py-3 px-4">{item}</a>)
}

        </div>
      </div>
    </div>
  );
}

export default Dropdown;
