import React from 'react';
import Link from 'next/link';
import microsoft from 'public/microsoft.jpeg';
import Image from 'next/image';
const ProductDefinitionPage = () => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-4">Product Definition Page</h1>
                <div className="w-full md:w-1/2 lg:w-1/3">
                    <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
                      
                        <Image className='w-full h-48 object-cover rounded-lg mb-4' src={microsoft} alt="Microsoft" />
                        <h2 className="text-xl font-bold mb-2">Company Name</h2>
                        <p className="text-gray-600 mb-2">Post Name</p>
                        <p className="text-gray-600 mb-2">Referred By</p>
                        <p className="text-gray-600 mb-4">Mobile Number</p>
                        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="/resumeform">Request for referral</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDefinitionPage;
