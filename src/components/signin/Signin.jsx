'use client';
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
function Signin() {
  const formik = useFormik({
    initialValues:{
      email:"",
      password:""
    },onSubmit
  });
  const router = useRouter();

  async function onSubmit (values){
    console.log('login credentials:', values);
    if(!values.email || !values.password){
      toast.error('All fields required!');
    }
    else{
    try {
      const res = await fetch("/api/signin",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(values)
      });
      const data = await res.json();
      console.log('loogedin data:',data);
      console.log('loogedin res:',res);
      if(res.status===400){
        toast.error(data.message);
      }
      else if(res.status===200){
        toast.success('Welcome back '+data.userdata.first_name);
        router.push('/landingpage');
      }

    } catch (error) {
      console.log('signin catch block',error);
    }
  }
  }
  return (
    <>
    <div className="g-0 lg:flex lg:p-10 lg:flex-wrap">
    <div className="px-4 md:px-0 lg:w-6/12">
    <div className="md:mx-6 md:p-12">
                {/* <!--Logo--> */}
                <div className="text-center">
                  <img
                    className="mx-auto w-48"
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    alt="logo" />
                  <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                    We are The Developer Team(Govind/Pankaj)
                  </h4>
                </div>

                <form onSubmit={formik.handleSubmit}>
                  <p className="mb-4">Please login to your account</p>
                  {/* <!--Username input--> */}
                  <div className="relative mb-4" data-te-input-wrapper-init>
                    <input
                    name="email"
                    {...formik.getFieldProps("email")}
                      type="email"
                      className="peer border-2 focus:border-b-2 focus:border-0 block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput1"
                      placeholder="Email" />
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >Email
                    </label>
                  </div>

                  {/* <!--Password input--> */}
                  <div className="relative mb-4" data-te-input-wrapper-init>
                    <input
                    name="password"
                    {...formik.getFieldProps("password")}
                      type="password"
                      className="peer border-2 focus:border-b-2 focus:border-0 block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput11"
                      placeholder="Password" />
                    <label
                      htmlFor="exampleFormControlInput11"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >Password
                    </label>
                  </div>

                  {/* <!--Submit button--> */}
                  <div className="mb-12 pb-1 pt-1 text-center">
                    <button
                      className="bg-gradient-to-r from-[#7A4297] via-[#B1268C] to-[#DD242F] mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                      type="submit"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      >
                      Log in
                    </button>

                    {/* <!--Forgot password link--> */}
                    <a href="#!">Forgot password?</a>
                  </div>

                  {/* <!--Register button--> */}
                  <div className="flex items-center justify-between pb-6">
                    <p className="mb-0 mr-2">Don't have an account?</p>
                    <Link href="/signup">
                    <button
					//   onClick={()=>{setActiveRegisterForm(true)}}
                      type="button"
                      className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                      data-te-ripple-init
                      data-te-ripple-color="light">
                      Register
                    </button>
                    </Link>
                  </div>
                </form>
              </div>
              </div>


              
              <div
              className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none bg-gradient-to-r from-[#7A4297] via-[#B1268C] to-[#DD242F]"
              >
              <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                <h4 className="mb-6 text-xl font-semibold">
                  We are more than just a Team
                </h4>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.
                </p>
              </div>
            </div>
            </div>
    </>
  )
}

export default Signin