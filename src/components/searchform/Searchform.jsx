import React from 'react';
import Searchicon from '../../../public/searchicon.svg';
import styles from './searchform.module.scss'
import Image from 'next/image'

function Searchform() {
  return (
    <>
    <form type="submit" className={styles.search_form}>
        <div className={styles.container}>
            <input className='' type='text' placeholder='search your dream company' title='search for you dream company'/>
            <button>
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