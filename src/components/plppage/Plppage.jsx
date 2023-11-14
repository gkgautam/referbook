import React from 'react';
import Plpcard from '@/components/plpcard/Plpcard';
import microsoftimg from '/public/microsoft.jpeg';
import netflix from '/public/netflix.jpeg';

import atlassian from '/public/Atlassian.png';
import google from '/public/google.webp';


import styles from './plppage.module.scss';

function Plppage() {
  return (
    <>
     <div className={styles.plp_section}>
       <Plpcard comp_data={{comp_picture:microsoftimg,comp_name:'MICROSOFT',job_title:'Sr. frontend developer',location:'Delhi',yrs_exp:'3yrs-5yrs',price:'₹630'}}/>
       <Plpcard comp_data={{comp_picture:atlassian,comp_name:'ATLASSIAN',job_title:'Backend developer',location:'Bangalore',yrs_exp:'2yrs-4yrs',price:'₹650'}}/>
       <Plpcard comp_data={{comp_picture:google,comp_name:'GOOGLE',job_title:'Junior Engineer',location:'Gurugram',yrs_exp:'1yrs-3yrs',price:'₹740'}}/>
       <Plpcard comp_data={{comp_picture:netflix,comp_name:'NETFLIX',job_title:'Sr. Data analyst',location:'Bangalore',yrs_exp:'5yrs-8yrs',price:'₹730'}}/>
       <Plpcard comp_data={{comp_picture:google,comp_name:'GOOGLE',job_title:'Junior Engineer',location:'Gurugram',yrs_exp:'1yrs-3yrs',price:'₹740'}}/>
       <Plpcard comp_data={{comp_picture:netflix,comp_name:'NETFLIX',job_title:'Sr. frontend developer',location:'Delhi',yrs_exp:'3yrs-5yrs',price:'₹630'}}/>
       <Plpcard comp_data={{comp_picture:microsoftimg,comp_name:'MICROSOFT',job_title:'Sr. frontend developer',location:'Delhi',yrs_exp:'3yrs-5yrs',price:'₹630'}}/>
       <Plpcard comp_data={{comp_picture:atlassian,comp_name:'ATLASSIAN',job_title:'Backend developer',location:'Bangalore',yrs_exp:'2yrs-4yrs',price:'₹650'}}/>
        </div>
    </>
  )
}

export default Plppage