import axiosInstance from '../axios';


// Action to initiate MoMo payment
export const initiateMomoPayment = (paymentData) => async (dispatch) => {
  try {
    dispatch({ type: 'MOMO_PAYMENT_REQUEST' });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axiosInstance.post('/api/payment/momo-payout', paymentData, config);

    dispatch({
      type: 'MOMO_PAYMENT_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'MOMO_PAYMENT_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
