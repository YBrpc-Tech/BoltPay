import { configureStore } from '@reduxjs/toolkit';
import invoiceReducer from './reducers/invoiceReducer';
import { momoPaymentReducer } from './reducers/momoReducer'; // import your momo reducer

export const store = configureStore({
  reducer: {
    invoice: invoiceReducer,
    momoPayment: momoPaymentReducer, // add it here
  },
});
