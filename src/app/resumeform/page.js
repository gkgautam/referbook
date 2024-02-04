"use client"; 
import React from 'react';
import { useFormik } from 'formik';



const ResumeForm = () => {
    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            mobileNumber: '',
        },
        onSubmit: (values) => {
            function validate (values) {
                const errors = {};
    
                if (!values.fullName) {
                    errors.fullName = 'Full Name is required';
                }
    
                if (!values.email) {
                    errors.email = 'Email is required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                }
    
                if (!values.mobileNumber) {
                    errors.mobileNumber = 'Mobile Number is required';
                } else if (!/^\d{10}$/i.test(values.mobileNumber)) {
                    errors.mobileNumber = 'Invalid mobile number';
                }
    
                return errors;
            };
            if(Object.keys(validate(values)).length > 0){
                console.error(validate(values));
            }
            else{
                try {
                    fetch('/api/resumeform', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(values),
                    })
                    .then(response => response.json())
                    .then(data => {
                        // Handle the response from the backend
                        console.log(data);
                    })
                    .catch(error => {
                        // Handle any errors that occur during the request
                        console.error(error);
                    });
                    // alert(JSON.stringify(values, null, 2));
                }
                catch (error) {
                    console.error(error);
                }
                    
                } 
            }
           
    });

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <form className="w-1/3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                        Full Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="fullName"
                        name='fullName'
                        {...formik.getFieldProps('fullName')}
                        type="text"
                        placeholder="Enter your full name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        name='email'
                        {...formik.getFieldProps('email')}
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobileNumber">
                        Mobile Number
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="mobileNumber"
                        name='mobileNumber'
                        {...formik.getFieldProps('mobileNumber')}
                        type="tel"
                        placeholder="Enter your mobile number"
                        maxLength={10}
                    />
                </div>
                {/* <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="document">
                        Document
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="document"
                        type="file"
                        accept=".pdf,.doc,.docx"
                    />
                </div> */}
                <div className="flex items-center justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Send Resume
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ResumeForm;
