import Navbar from "@/components/Navbar/navbar";
import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const Profile = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = Cookies.get('authToken');

    if (!token) {
      router.push('/auth/login');
    } else {
      // Fetch user data based on the token (you should implement this API endpoint)
      fetchUserData(token);
    }
  }, [router]);

  const fetchUserData = async (token) => {
    // Replace this with an API request to fetch user data based on the token
    try {
      const response = await fetch('http://localhost:8000/api/user/userdata', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log('User data:', data); // Log the data received from the server
        setUser(data.user); // Assuming the response contains user data
      } else {
        // Handle error or logout the user if the token is invalid
        console.error('Error fetching user data');
        logout();
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      logout();
    }
  };

  const logout = () => {
    // Clear the auth token and redirect to the login page
    Cookies.remove('authToken');
    router.push('/auth/login');
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        {user ? (
          <div className="text-center">
            {user.is_verified ? (
              <>
                <h1 className="text-3xl font-bold mb-4">Welcome to your profile, {user.name}</h1>
                <p className="text-lg">Email: {user.email}</p>
                <p className="text-lg">Name: {user.name}</p>
              </>
            ) : (
              <p className="text-red-500">Please verify your email to access this page.</p>
            )}
            <button
              className="bg-gray-700 text-white font-bold py-2 px-4 rounded hover:bg-gray-600"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
