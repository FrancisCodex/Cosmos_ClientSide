import Image from "next/image";
import MyBackgroundImage from '../assets/ecom2.webp';
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios"; // You may need to install Axios

const Resetpassword = () => {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [formData, setFormData] = useState({
    newPassword: "", // Updated to accept new password
  });
  const [passwordError, setPasswordError] = useState("");
  const [isValidToken, setIsValidToken] = useState(false);

  useEffect(() => {
    const { token } = router.query;
    // Check the token's validity on page load
    if (token) {
      setToken(token)
      axios.post('http://localhost:8000/api/user/checkResetToken', { token })
        .then((response) => {
          if (response.status === 200) {
            setIsValidToken(true);
          } else {
            setIsValidToken(false);
          }
        })
        .catch((error) => {
          console.error('Error checking reset token:', error);
          setIsValidToken(false);
        });
    }
  }, [router.query]);

  console.log("what is the token? : ", token);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Reset the password error message when the user types
    setPasswordError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate the new password
    if (formData.newPassword.length < 8 || formData.newPassword.length > 15) {
      setPasswordError("Password must be between 8 and 15 characters.");
      return;
    }
  
    try {
      // Include the token and new password in the form data
      formData.token = token;
  
      // Make a POST request to your backend API to reset the password
      const response = await axios.post("http://localhost:8000/api/user/resetpassword", formData);
  
      if (response.data.message === "Password reset successful") {
        // Password reset was successful
        // You might want to show a success message or redirect the user to a confirmation page
        console.log("Password reset successful");
        router.push("/auth/login"); // Redirect to the login page
      } else {
        // Handle password reset failure (show an error message)
        console.error("Password reset failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };
  

  return (
    <div>
      {isValidToken?(
        <div className="py-6 my-20 flex items-center justify-center min-h-screen">
        <div className="flex justify-center items-center bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div className="hidden lg:block lg:w-1/2">
            <Image src={MyBackgroundImage} className="w-fit h-max" alt="background" />
          </div>
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">Cosmos Cafe</h2>
            <p className="text-xl text-gray-600 text-center">Reset password</p>
            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <label htmlFor="newPassword" className="block text-gray-700 text-sm font-bold mb-2">
                  New Password
                </label>
                <input
                  id="newPassword"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="password"
                  required
                />
                {passwordError && (
                  <p className="text-red-500 text-sm mt-2">{passwordError}</p>
                )}
              </div>
              <div className="mt-8">
                <button
                  className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                  type="submit"
                >
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      ):(
        <p className="pt-20">Invalid or expired reset password token.</p>
      )}
    </div>
  );
};

export default Resetpassword;
