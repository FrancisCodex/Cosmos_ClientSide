import Image from 'next/image';
import bgImage from '../assets/logo12.png'
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Registerpage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // State for success message
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:8000/api/user/register", formData);
  
      if (response.data.success) {
        // Registration was successful, show a success message
        setRegistrationSuccess(true);
        localStorage.setItem("token", response.data.token);
  
        setTimeout(() => {
          router.push("/auth/login");
        }, 2000);
      } else {
        // Registration failed, show an error message
        console.error("Registration failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };
  

  return (
    <div>
      {/* Success message */}
      {registrationSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> Registration was successful.</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => setRegistrationSuccess(false)}>
            <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <title>Close</title>
              <path
                d="M14.348 5.652a.5.5 0 0 0-.708 0L10 9.293 6.36 5.652a.5.5 0 0 0-.708.708L9.293 10l-3.64 3.64a.5.5 0 1 0 .708.708L10 10.707l3.64 3.64a.5.5 0 0 0 .708-.708L10.707 10l3.64-3.64a.5.5 0 0 0 0-.708z"
              />
            </svg>
          </span>
        </div>
      )}

<div className="py-6 my-20 flex items-center justify-center min-h-screen">
    <div className="flex justify-center items-center bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
    <div className="hidden lg:block lg:w-1/2 bg-cover"><Image src={bgImage} alt='background'/></div>
            <div className="w-full p-8 lg:w-1/2">
                <h2 className="text-2xl font-semibold text-gray-700 text-center">Café Cosmos </h2>
                <p className="text-xl text-gray-600 text-center">Welcome</p>
                <a href="#" className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                    <div className="px-4 py-3">
                        <svg className="h-6 w-6" viewBox="0 0 40 40">
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107"/>
                            <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00"/>
                            <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50"/>
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2"/>
                        </svg>
                    </div>
                    <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign up with Google</h1>
                </a>
                <div className="mt-4 flex items-center justify-between">
                    <span className="border-b w-1/5 lg:w-1/4"></span>
                    <a href="#" className="text-xs text-center text-gray-500 uppercase">or Sign up with email</a>
                    <span className="border-b w-1/5 lg:w-1/4"></span>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mt-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                        type="text"
                        required
                    />
                    </div>
                    <div className="mt-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        Email Address
                    </label>
                    <input
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                        type="email"
                        required
                    />
                    </div>
                    <div className="mt-4">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none ${
                        formData.password.length < 8 || formData.password.length > 15 ? "border-red-500" : ""
                        }`}
                        type="password"
                        required
                    />
                    {formData.password.length < 8 || formData.password.length > 15 ? (
                        <p className="text-red-500 text-sm mt-1">
                        Password must be between 8 and 15 characters.
                        </p>
                    ) : null}
                    </div>
                    <div className="mt-8">
                    <button
                        className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                        type="submit"
                    >
                        Register
                    </button>
                    </div>
                </form>
                <div className="mt-4 flex items-center justify-between">
                    <span className="border-b w-1/5 md:w-1/4"></span>
                    <a href="/auth/login" className="text-xs text-gray-500 uppercase">Login here</a>
                    <span className="border-b w-1/5 md:w-1/4"></span>
                </div>
            </div>
        </div>
    </div>
  </div>);
};
export default Registerpage;