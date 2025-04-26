import axiosInstance from '../axios';

// Action Types
export const CREATE_INVOICE_REQUEST = 'CREATE_INVOICE_REQUEST';
export const CREATE_INVOICE_SUCCESS = 'CREATE_INVOICE_SUCCESS';
export const CREATE_INVOICE_FAILURE = 'CREATE_INVOICE_FAILURE';

export const GET_INVOICE_STATUS_REQUEST = 'GET_INVOICE_STATUS_REQUEST';
export const GET_INVOICE_STATUS_SUCCESS = 'GET_INVOICE_STATUS_SUCCESS';
export const GET_INVOICE_STATUS_FAILURE = 'GET_INVOICE_STATUS_FAILURE';

// Create Invoice
export const createInvoice = (invoiceData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_INVOICE_REQUEST });

    const { data } = await axiosInstance.post('/api/payment/', invoiceData);

    dispatch({
      type: CREATE_INVOICE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_INVOICE_FAILURE,
      payload: error.response?.data || error.message,
    });
  }
};

// Get Invoice Status
export const getInvoiceStatus = (invoiceId) => async (dispatch) => {
  try {
    dispatch({ type: GET_INVOICE_STATUS_REQUEST });

    const { data } = await axiosInstance.get(`/api/invoice/${invoiceId}`);

    dispatch({
      type: GET_INVOICE_STATUS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_INVOICE_STATUS_FAILURE,
      payload: error.response?.data || error.message,
    });
  }
};
