// components/Payment.js
import React, {useState} from 'react';
import Navbar from '@/components/Navbar/navbar';
import Cookies from 'js-cookie';
import axios from 'axios';
const Payment = () => {

    const [address, setAddress] = useState('');
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');    
    const [securityCode, setSecurityCode] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const paymentData = {
            address,
            name,
            cardNumber,
            month,
            year,
            securityCode
        };

        try {
            const token = Cookies.get('authToken'); // replace with your token

            axios.post('http://localhost:8000/api/user/payment', paymentData,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
            })
            .then(response => {
            console.log(response);
            })
            .catch(error => {
            console.error(error);
            });
                    } catch (error) {
                        console.error(error);
                    }
                };


    return (
        <div>
            <div className="pb-5">
            <Navbar />
            </div>
            <div className="min-w-screen min-h-screen bg-gray-50 py-5">
            <div className="px-5">
                <div className="mb-2">
                <a href="#" className="focus:outline-none hover:underline text-gray-500 text-sm"><i className="mdi mdi-arrow-left text-gray-400" />Back</a>
                </div>
                <div className="mb-2">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-600">Checkout.</h1>
                </div>
                <div className="mb-5 text-gray-400">
                <a href="#" className="focus:outline-none hover:underline text-gray-500">Home</a> / <a href="#" className="focus:outline-none hover:underline text-gray-500">Cart</a> / <span className="text-gray-600">Checkout</span>
                </div>
            </div>
            <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
                <div className="w-full">
                <div className="-mx-3 md:flex items-start">
                    <div className="px-3 md:w-7/12 lg:pr-10">
                    
                    <div className="mb-6 pb-6 border-b border-gray-200">
                        <div className="-mx-2 flex items-end justify-end">
                        <div className="flex-grow px-2 lg:max-w-xs">
                            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Discount code</label>
                            <div>
                            <input className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="XXXXXX" type="text" />
                            </div>
                        </div>
                        <div className="px-2">
                            <button className="block w-full max-w-xs mx-auto border border-transparent bg-gray-400 hover:bg-gray-500 focus:bg-gray-500 text-white rounded-md px-5 py-2 font-semibold">APPLY</button>
                        </div>
                        </div>
                    </div>
                    <div className="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                        <div className="w-full flex mb-3 items-center">
                        <div className="flex-grow">
                            <span className="text-gray-600">Subtotal</span>
                        </div>
                        <div className="pl-3">
                            <span className="font-semibold"></span>
                        </div>
                        </div>
                        <div className="w-full flex items-center">
                        <div className="flex-grow">
                            <span className="text-gray-600">Taxes (GST)</span>
                        </div>
                        <div className="pl-3">
                            <span className="font-semibold"></span>
                        </div>
                        </div>
                    </div>
                    <div className="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                        <div className="w-full flex items-center">
                        <div className="flex-grow">
                            <span className="text-gray-600">Total</span>
                        </div>
                        <div className="pl-3">
                            <span className="font-semibold text-gray-400 text-sm">PHP</span> <span className="font-semibold"></span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="px-3 md:w-5/12">
                    
                    <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                        <div className="w-full p-3 border-b border-gray-200">
                        <div className="mb-5">
                            <label htmlFor="type1" className="flex items-center cursor-pointer">
                            <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" defaultChecked />
                            <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-6 ml-3" />
                            </label>
                        </div>
                        <div>
                            <div className="mb-3">
                            <label htmlFor='address' className="text-gray-600 font-semibold text-sm mb-2 ml-1">Address</label>
                            <div>
                                <input value={address}
                onChange={e => setAddress(e.target.value)} name='address' className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Address" type="text" />
                            </div>
                            </div>
                            <div className="mb-3">
                            <label htmlFor='name' className="text-gray-600 font-semibold text-sm mb-2 ml-1">Name on card</label>
                            <div>
                                <input value={name}
                onChange={e => setName(e.target.value)} name='name' className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text" />
                            </div>
                            </div>
                            <div className="mb-3">
                            <label htmlFor='creditcard' className="text-gray-600 font-semibold text-sm mb-2 ml-1">Card number</label>
                            <div>
                                <input value={cardNumber}
                onChange={e => setCardNumber(e.target.value)} name='creditcard' className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="text" />
                            </div>
                            </div>
                            <div className="mb-3 -mx-2 flex items-end">
                            <div className="px-2 w-1/4">
                                <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Expiration date</label>
                                <div>
                                <select value={month}
  onChange={e => setMonth(e.target.value)} className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                    <option value={1}>01 - January</option>
                                    <option value={2}>02 - February</option>
                                    <option value={3}>03 - March</option>
                                    <option value={4}>04 - April</option>
                                    <option value={5}>05 - May</option>
                                    <option value={6}>06 - June</option>
                                    <option value={7}>07 - July</option>
                                    <option value={8}>08 - August</option>
                                    <option value={9}>09 - September</option>
                                    <option value={10}>10 - October</option>
                                    <option value={11}>11 - November</option>
                                    <option value={12}>12 - December</option>
                                </select>
                                </div>
                            </div>
                            <div className="px-2 w-1/4">
                                <select  value={year}
  onChange={e => setYear(e.target.value)} className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                <option value={2024}>2024</option>
                                <option value={2025}>2025</option>
                                <option value={2026}>2026</option>
                                <option value={2027}>2027</option>
                                <option value={2028}>2028</option>
                                <option value={2029}>2029</option>
                                <option value={2030}>2030</option>
                                <option value={2031}>2031</option>
                                <option value={2032}>2032</option>
                                <option value={2033}>2033</option>
                                </select>
                            </div>
                            <div className="px-2 w-1/4">
                                <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Security code</label>
                                <div>
                                <input value={securityCode}
                onChange={e => setSecurityCode(e.target.value)} className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Eg 1234" type="text" />
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div>
                        <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold" onClick={handleSubmit}><i className="mdi mdi-lock-outline mr-1" /> PAY NOW</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="p-5">
            </div>
            </div>

        </div>
    );
};

export default Payment;