import React from "react";
import styles from './dropdown.module.scss'

function Dropdown({content}) {
  return (
    <div>
      <div className={styles.dropdown}>
        <button className={styles.dropbtn}>{content.title}</button>
        <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="zZ3yfL"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" class="_2gTTdy"></path></svg>
        <div className={styles.dropdown_content}>
          {/* <a href="#">My profile</a>
          <a href="#">orders</a>
          <a href="#">notifications</a>
          <a href="#">logout</a> */}
{
  content.options.map((item)=><a href="#">{item}</a>)
}

        </div>
      </div>
    </div>
  );
}

export default Dropdown;
