import React from 'react';
import Image from 'next/image';

import styles from './plpcard.module.scss'

function Plpcard({comp_data}) {
  return (
    <div className={styles.plpcard}>
        <a href=''>
        <Image
        className={styles.company_picture}
        src={comp_data.comp_picture}
        width={330}
        height={390}
        alt="microsoft image"
      />
        </a>
        <div className={styles.job_details}>
            <div className={styles.company_name}>
            {comp_data.comp_name}
            </div>
            <div className={styles.job_title}>
            {comp_data.job_title}
            </div>
            <div className='company_location'>
            {comp_data.location}
            </div>
            <div className='total_experience'>
            {comp_data.yr_exp}
            </div>
            <div className={styles.price}>
            {comp_data.price}
            </div>
        </div>
    </div>
  )
}

export default Plpcard