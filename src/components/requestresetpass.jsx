import Image from "next/image";
import MyBackgroundImage from '../assets/ecom2.webp';
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Requestresetpass = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend API for a password reset request
        const response = await axios.post("http://localhost:8000/api/user/reset-password-request", formData);
        console.log("request response: ", formData);

      if (response.data.success) {
        // Password reset request was successful
        // You might want to show a success message or redirect the user to a confirmation page
        console.log("Password reset request successful");
        router.push("/auth/profile"); // Redirect to the profile page or a confirmation page
      } else {
        // Handle password reset request failure (show an error message)
        console.error("Password reset request failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <div>
      <div className="py-6 my-20 flex items-center justify-center min-h-screen">
        <div className="flex justify-center items-center bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div className="hidden lg:block lg:w-1/2">
            <Image src={MyBackgroundImage} className="w-fit h-max" alt="background" />
          </div>
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">Cosmos Cafe</h2>
            <p className="text-xl text-gray-600 text-center">Request Reset password</p>
            <form onSubmit={handleSubmit}>
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
              <div className="mt-8">
                <button
                  className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requestresetpass;
