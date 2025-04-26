import {
    CREATE_INVOICE_REQUEST,
    CREATE_INVOICE_SUCCESS,
    CREATE_INVOICE_FAILURE,
    GET_INVOICE_STATUS_REQUEST,
    GET_INVOICE_STATUS_SUCCESS,
    GET_INVOICE_STATUS_FAILURE,
  } from '../actions/invoiceActions';
  
  // Initial state for the invoice
  const initialState = {
    loading: false,
    invoice: null,
    error: null,
    invoiceStatus: null,
  };
  
  // Invoice Reducer
  const invoiceReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_INVOICE_REQUEST:
        return { ...state, loading: true };
      case CREATE_INVOICE_SUCCESS:
        return { ...state, loading: false, invoice: action.payload };
      case CREATE_INVOICE_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      case GET_INVOICE_STATUS_REQUEST:
        return { ...state, loading: true };
      case GET_INVOICE_STATUS_SUCCESS:
        return { ...state, loading: false, invoiceStatus: action.payload };
      case GET_INVOICE_STATUS_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  
  export default invoiceReducer;
  