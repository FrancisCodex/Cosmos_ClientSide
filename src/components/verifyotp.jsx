import React, {useState} from 'react'
import axios from 'axios'
import Cookies from 'js-cookie';
import { useRouter } from 'next/router'


const Verifyotp = () => {
    const [otp, setOtp] = useState(" ");
    const [sent, setSent] = useState(false);
    const router = useRouter()
    const { email } = router.query

    const handleChange = (e) => {
        setOtp(e.target.value);
      }
  
      const handleSubmit = async (e) => {
        e.preventDefault();
        // Send a request to the backend
        try {
          const response = await axios.post('http://localhost:8000/api/user/verifyOTP', {
            otp: otp,
            email: email
          });
          
          if (response.status === 200) {
            //If the OTP is correct, get the JWT Token and store it in the browser
            console.log("OTP Verified");
            const token = response.data.token;

            console.log("the Response: ", token)
            // Store the token in cookies that expires in 1 hour
            Cookies.set('authToken', token, { expires: 1 / 24 });
            // Redirect the user to the dashboard
            window.location.href = '/user/profile';
          } else {
            // Handle error
          }
        } catch (error) {
          // Handle the error
        }
      }

      const handleResend = async () => {
        // Send a request to the backend to resend the OTP
        try {
          const response = await axios.post('http://localhost:8000/api/user/generateOTP', {
            email: email
          });
        } catch (error) {
          console.error('Error occurred:', error);
        }
      }

      const handleSend = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/user/generateOTP', {
              email: email
            });
            if (response.status === 200) {
              // OTP sent successfully
              setSent(true);
            }
            // Handle the response
          } catch (error) {
            // Handle the error
          }
      }



      
  return (
    <div>
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
            <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
                <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                <div className="flex flex-col items-center justify-center text-center space-y-2">
                    <div className="font-semibold text-3xl">
                    <p>Email Verification</p>
                    </div>
                    <div className="flex flex-row text-sm font-medium text-gray-400">
                    <p>We have sent a code to your email</p>
                    </div>
                </div>
                <div>
                    {sent?(
                        <form onSubmit={handleSubmit}>
                        <div className="flex flex-col space-y-16">
                            <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                            <div className="w-full h-16 ">
                                <input
                                    className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                    type="text"
                                    value={otp}
                                    onChange={handleChange}
                                />
                                </div>
                            </div>
                            <div className="flex flex-col space-y-5">
                            <div>
                                <button className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                                Verify Account
                                </button>
                            </div>
                            <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                             <p>Didn't recieve code?</p> <a className="flex flex-row items-center text-blue-600" href="#" onClick={handleResend}>Resend</a>
                            </div>
                            </div>
                        </div>
                        </form>
                    ) : (
                        <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                            <button className="flex flex-row items-center justify-center bg-blue-600 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-blue-700 focus:outline-none focus:shadow-outline" onClick={handleSend}>Send OTP</button>
                        </div>
                    )}
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Verifyotp