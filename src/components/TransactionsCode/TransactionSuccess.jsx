import React from "react";
import { CheckCircle, Send, Smartphone, Loader2 } from "lucide-react";

const TransactionSuccess = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-8">
      <div className="max-w-xl w-full bg-white p-8 space-y-6 text-center">
        {/* Success Icon */}
        <div className="flex justify-center">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Transaction Successful!
        </h2>

        {/* Message */}
        <p className="text-gray-600">
          Your payment has been completed successfully. The receiver will be notified shortly.
        </p>

        {/* Transaction Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-left text-sm text-gray-700">
          <div className="rounded-lg border border-green-100 bg-green-50 p-4 flex items-center gap-3">
            <span className="text-green-600 bg-green-100 p-2 rounded-full">
              <Loader2 className="w-5 h-5" />
            </span>
            <div>
              <p className="font-medium text-gray-800">Transaction ID</p>
              <p>TXN-45AD8J9C</p>
            </div>
          </div>

          <div className="rounded-lg border border-green-100 bg-green-50 p-4 flex items-center gap-3">
            <span className="text-green-600 bg-green-100 p-2 rounded-full">
              <Send className="w-5 h-5" />
            </span>
            <div>
              <p className="font-medium text-gray-800">Amount</p>
              <p>50,000 FCFA</p>
            </div>
          </div>

          <div className="rounded-lg border border-green-100 bg-green-50 p-4 flex items-center gap-3">
            <span className="text-green-600 bg-green-100 p-2 rounded-full">
              <Smartphone className="w-5 h-5" />
            </span>
            <div>
              <p className="font-medium text-gray-800">Receiver</p>
              <p>+237 675 XXX XXX</p>
            </div>
          </div>

          <div className="rounded-lg border border-green-100 bg-green-50 p-4 flex items-center gap-3">
            <span className="text-green-600 bg-green-100 p-2 rounded-full">
              <CheckCircle className="w-5 h-5" />
            </span>
            <div>
              <p className="font-medium text-gray-800">Status</p>
              <p>Completed</p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="pt-4">
          <button className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
            Send Another
          </button>
        </div>
      </div>
    </section>
  );
};

export default TransactionSuccess;
