import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';
import SendMoneyForm from './pages/SendMoney/SendMoneyForm';
import ReceiveMoneyForm from './pages/RecieveMoney/ReceiveMoneyForm';
import TransactionSuccess from './components/TransactionsCode/TransactionSuccess';
import TransactionPending from './components/TransactionsCode/TransactionPending';

const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen bg-white">
        {/* Fixed Navbar at the top with z-index */}
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>

        {/* Padding top to prevent content from hiding behind navbar */}
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/send" element={<SendMoneyForm />} />
            <Route path="/receive" element={<ReceiveMoneyForm />} />
            <Route path="/success" element={<TransactionSuccess />} />
            <Route path="/pending/:invoiceReferenceId" element={<TransactionPending />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
