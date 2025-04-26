import React, { useState } from "react";
import { Bitcoin, Zap } from "lucide-react";
import img from "../../assets/recieve.jpg"; // Replace with your actual image

const ReceiveMoneyForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("bitcoin");

  const payOptions = [
    {
      label: "Bitcoin",
      value: "bitcoin",
      icon: <Bitcoin className="w-5 h-5 text-yellow-500" />,
    },
    {
      label: "Lightning Network",
      value: "lightning",
      icon: <Zap className="w-5 h-5 text-orange-500" />,
    },
    {
      label: "Other Coin",
      value: "other",
      icon: (
        <div className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center text-xs font-bold text-white">
          ?
        </div>
      ),
    },
  ];

  return (
    <section className="py-8 px-6 lg:px-20 xl:px-56">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Illustration */}
        <div className="w-full">
          <img
            src={img}
            alt="Receive Money Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Card */}
        <div className="bg-white p-8 lg:p-10">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
            Receive Money Instantly
          </h2>

          <form className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="e.g. John Doe"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
            </div>

            {/* MoMo Number */}
            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                MoMo Number
              </label>
              <input
                type="tel"
                placeholder="e.g. +237 6XX XXX XXX"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
            </div>

            {/* Email & Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Email */}
              <div>
                <label className="block mb-1 text-gray-700 font-medium">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              {/* Country */}
              <div>
                <label className="block mb-1 text-gray-700 font-medium">
                  Country
                </label>
                <select
                  defaultValue="Cameroon"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                >
                  <option value="Cameroon">Cameroon</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Ghana">Ghana</option>
                </select>
              </div>
            </div>

            {/* Amount */}
            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                Amount (FCFA)
              </label>
              <input
                type="number"
                placeholder="e.g. 100000"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
            </div>

            {/* Pay Through */}
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Pay Through
              </label>
              <div className="flex gap-4 flex-wrap">
                {payOptions.map((option) => (
                  <button
                    type="button"
                    key={option.value}
                    onClick={() => setPaymentMethod(option.value)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all text-sm font-medium ${
                      paymentMethod === option.value
                        ? "bg-primary text-white border-primary"
                        : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                    }`}
                  >
                    {option.icon}
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-secondary transition-all text-white text-base font-semibold py-3 rounded-full shadow-sm hover:scale-[1.02]"
              >
                Generate Payment Instructions
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReceiveMoneyForm;
