import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';  // Import the Provider component from react-redux
import './index.css';
import App from './App.jsx';
import { store } from './redux/store.js';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrap your App component with the Provider and pass the Redux store */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
