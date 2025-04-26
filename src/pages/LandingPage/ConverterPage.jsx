import React from 'react';
import { FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { IoIosArrowDown } from 'react-icons/io';
import { TbRefresh } from 'react-icons/tb';

import { GiNigeria } from 'react-icons/gi';

const ConverterPage = () => {
  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center px-4 py-">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-3xl font-bold text-primary-2">Send money to Cameroon<br />from Anywhere!</h1>
        <p className="text-gray-700 mt-4 font-semibold">Fast, affordable online money transfers <br /> from Anywhere to Cameroon</p>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-xl shadow-xl w-[350px]">
        <div className="text-xs bg-blue-100 text-primary-3 rounded-full px-4 py-1 inline-block mb-6 font-semibold">
          1 BTC = 1,546.45 XAF
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between border border-gray-300 rounded-xl px-4 py-1 bg-bg mb-[-8px]">
            <div>
              <p className="text-xs text-gray-500">You send</p>
              <div className=" font-semibold">1,000</div>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-sm font-medium">BTC</span>
              <IoIosArrowDown />
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-primary-3 text-white p-2 rounded-full">
              <TbRefresh />
            </div>
          </div>

          <div className="flex items-center justify-between border border-gray-300 rounded-xl px-4 py-1 bg-bg mt-[-22px]">
            <div>
              <p className="text-xs text-gray-500">Recipient gets</p>
              <div className=" font-semibold">1,546,450</div>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-sm font-medium">NGN</span>
              <IoIosArrowDown />
            </div>
          </div>

          <div className="border border-gray-300 rounded-xl px-4 py-1 bg-bg">
            <p className="text-xs text-gray-500 mb-1">Destination</p>
            <div className="flex items-center space-x-2">
              <span className=" text-sm font-medium">Cameroon</span>
            </div>
          </div>

          <div className="flex space-x-3 mt-4">
            <button className=" text-xs flex-1 bg-primary-3 text-white font-semibold py-3 rounded-full hover:scale-105 transition-all duration-300">Receive cash</button>
            <button className=" text-xs flex-1 bg-primary-3 text-white font-semibold py-3 rounded-full hover:scale-105 transition-all duration-300">Send cash</button>
          </div>
        </div>
      </div>

      <div className="flex space-x-4 mt-8">
        <button className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-full text-sm transition-all duration-300">
          <FaApple className="text-lg" />
          <span>App Store</span>
        </button>
        <button className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-full text-sm transition-all duration-300">
          <FcGoogle className="text-lg" />
          <span>Playstore</span>
        </button>
      </div>
    </div>
  );
};

export default ConverterPage;
