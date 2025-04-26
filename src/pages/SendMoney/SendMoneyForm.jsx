import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Smartphone, Send, Zap } from "lucide-react";
import img from "../../assets/send.jpg";
import { createInvoice } from "../../redux/actions/invoiceActions";

const SendMoneyForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    receiverCountry: "Cameroon",
    amount: "",
    receiverNumber: "",
  });

  const [receiverMethod, setReceiverMethod] = useState("MOMO");
  const [payMethod, setPayMethod] = useState("lightning");

  const { loading, invoice, error } = useSelector((state) => state.invoice);

  // Navigate when invoice is created and loading is done
  useEffect(() => {
    if (!loading && invoice?.data) {
      console.log("Ejara message:", invoice.data.message);
      if (invoice.data.message === "Successful") {
        const refId = invoice.data.data.invoiceReferenceId;

        // --- Prepare MoMo payment payload ---
        const momoPayload = {
          phoneNumber: formData.receiverNumber,
          amount: formData.amount,
          emailAddress: formData.email,
          paymentMode: receiverMethod.toUpperCase(), // MTN / ORANGE
          externalReference: refId, // Use invoice reference id
        };

        // Navigate to pending page and pass momoPayload as state
        navigate(`/pending/${refId}`, { state: { momoPayload } });
      }
    }
  }, [loading, invoice, navigate, formData]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const reference = `BOLT-${Date.now()}`;
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const expiresAt = tomorrow.toISOString().split("T")[0];

    const payload = {
      amount: formData.amount,
      amountCurrency: "SATs",
      description: `Send to ${
        formData.receiverNumber
      } via ${receiverMethod.toUpperCase()}`,
      reference,
      expiresAt,
    };

    dispatch(createInvoice(payload));
  };

  return (
    <section className="py-8 px-6 lg:px-20 xl:px-56">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="w-full">
          <img
            src={img}
            alt="Send Money"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form */}
        <div className="bg-white p-8 lg:p-10">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
            Send Money Securely
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-gray-700 font-medium">
                  Receiver’s Country
                </label>
                <select
                  name="receiverCountry"
                  value={formData.receiverCountry}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                >
                  <option value="Cameroon">Cameroon</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Ghana">Ghana</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 text-gray-700 font-medium">
                  Amount (FCFA)
                </label>
                <input
                  type="number"
                  name="amount"
                  placeholder="e.g. 50000"
                  value={formData.amount}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Receiver Receives Through
              </label>
              <div className="flex gap-4 flex-wrap">
                {[
                  {
                    label: "MTN MoMo",
                    value: "MOMO",
                    icon: <Smartphone className="w-5 h-5 text-yellow-500" />,
                  },
                  {
                    label: "Orange Money",
                    value: "OM",
                    icon: <Smartphone className="w-5 h-5 text-orange-500" />,
                  },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setReceiverMethod(option.value)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium ${
                      receiverMethod === option.value
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

            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                Receiver’s Account Number
              </label>
              <input
                type="number"
                name="receiverNumber"
                placeholder="e.g. 675XXXXXX"
                value={formData.receiverNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Pay Through
              </label>
              <div className="flex gap-4 flex-wrap">
                {[
                  {
                    label: "Lightning Network",
                    value: "lightning",
                    icon: <Zap className="w-5 h-5 text-orange-500" />,
                  },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setPayMethod(option.value)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium ${
                      payMethod === option.value
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

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-secondary text-white text-base font-semibold py-3 rounded-full shadow-sm hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                {loading ? (
                  "Processing..."
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Money
                  </>
                )}
              </button>
              {error && (
                <p className="text-red-600 mt-2">
                  {typeof error === "string"
                    ? error
                    : error.message || "Something went wrong"}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SendMoneyForm;
