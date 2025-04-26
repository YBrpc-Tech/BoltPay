const initialState = {};

export const momoPaymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MOMO_PAYMENT_REQUEST':
      return { loading: true };

    case 'MOMO_PAYMENT_SUCCESS':
      return { loading: false, success: true, paymentData: action.payload };

    case 'MOMO_PAYMENT_FAIL':
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
