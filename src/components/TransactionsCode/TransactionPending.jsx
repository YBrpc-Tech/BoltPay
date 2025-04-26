import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Loader2, Send, Smartphone, Clock, Copy } from "lucide-react";
import QRCode from "react-qr-code";
import { getInvoiceStatus } from "../../redux/actions/invoiceActions";
import { initiateMomoPayment } from "../../redux/actions/momoActions";

const TransactionPending = () => {
  const { invoiceReferenceId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [copied, setCopied] = useState(false);

  const momoPayload = location.state?.momoPayload;
  console.log(momoPayload)

  const { loading, invoiceStatus, error } = useSelector((state) => state.invoice);

  const info = invoiceStatus?.data?.data || {};
  const hash = info.invoiceHash || "";
  const status = info.status || "";

  useEffect(() => {
    dispatch(getInvoiceStatus(invoiceReferenceId));
    const id = setInterval(() => {
      dispatch(getInvoiceStatus(invoiceReferenceId));
    }, 60 * 1000);

    return () => clearInterval(id);
  }, [dispatch, invoiceReferenceId]);

  // Trigger MoMo payout if invoice is paid
  useEffect(() => {
    if (status.toLowerCase() === "successful" && momoPayload) {
      dispatch(initiateMomoPayment(momoPayload));
      navigate("/success");
    }
  }, [status, momoPayload, dispatch, navigate]);

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-16 h-16 animate-spin text-secondary" />
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-red-600">
          {typeof error === "string" ? error : error.message}
        </p>
      </section>
    );
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(hash).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center mb-8 px-4 md:px-8 lg:px-16">
      <div className="bg-white px-6 py-8 max-w-4xl w-full text-center">
        <div className="flex flex-col items-center space-y-6">
          <Loader2 className="w-24 h-24 animate-spin text-secondary" />
          <h2 className="text-2xl font-bold text-gray-800">
            Transaction Initiated
          </h2>
          <p className="text-gray-600 text-sm">
            We’ve successfully initiated your transaction. We’re now waiting for
            the payment to be completed...
          </p>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-secondary/10 p-4 shadow-sm border border-secondary/30 flex items-center gap-3">
              <span className="bg-secondary/20 text-secondary p-2 rounded-full">
                <Loader2 className="w-5 h-5" />
              </span>
              <div className="text-sm text-gray-700">
                <p className="font-medium text-gray-800">Transaction ID</p>
                <p className="text-xs ml-[-20px]">
                  {info.invoiceReferenceId || invoiceReferenceId}
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-secondary/10 p-4 shadow-sm border border-secondary/30 flex items-center gap-3">
              <span className="bg-secondary/20 text-secondary p-2 rounded-full">
                <Send className="w-5 h-5" />
              </span>
              <div className="text-sm text-gray-700">
                <p className="font-medium text-gray-800">Amount (SATS)</p>
                <p className="text-xs">
                  {info.amount?.toLocaleString() || "—"}
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-secondary/10 p-4 shadow-sm border border-secondary/30 flex items-center gap-3">
              <span className="bg-secondary/20 text-secondary p-2 rounded-full">
                <Smartphone className="w-5 h-5" />
              </span>
              <div className="text-sm text-gray-700 overflow-hidden">
                <p className="font-medium text-gray-800">Details</p>
                <p className="text-xs ">{info.description || "—"}</p>
              </div>
            </div>

            <div className="rounded-xl bg-yellow-50 p-4 shadow-sm border border-yellow-200 flex items-center gap-3">
              <span className="bg-yellow-100 text-yellow-600 p-2 rounded-full">
                <Clock className="w-5 h-5" />
              </span>
              <div className="text-sm text-gray-700">
                <p className="font-medium text-gray-800">Status</p>
                <p className="text-xs">{status}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 w-full h-full flex flex-col justify-center text-center xl:px-56">
        <p className="font-medium mb-2">Scan to Pay</p>
        <div className="inline-block bg-white mx-auto">
          <QRCode value={hash} size={250} />
        </div>

        <p className="font-medium mt-4 text-sm ">Invoice Hash</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-2">
          <code className="break-all px-2 py-1 bg-gray-100 rounded">
            {hash}
          </code>
          <button
            onClick={handleCopy}
            className="p-2 bg-secondary text-white rounded hover:bg-secondary/80 flex items-center"
          >
            <Copy className="w-4 h-4" />
          </button>
        </div>
        {copied && (
          <p className="text-green-600 text-sm mt-2">
            Copied to clipboard!
          </p>
        )}
      </div>
    </section>
  );
};

export default TransactionPending;
