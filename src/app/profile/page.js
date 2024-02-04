import React from 'react';

const page = () => {
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    avatar: 'https://gravatar.com/avatar/831d08365a1486a62d99b07b0791ea8f?s=400&d=robohash&r=x',
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">User Profile</h2>
            <div className="flex items-center mb-4">
              <img
                src={user.avatar}
                alt="User Avatar"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="text-lg font-semibold">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-gray-500">{user.email}</p>
              </div>
            </div>
            {/* Add additional profile content here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
