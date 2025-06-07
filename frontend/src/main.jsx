import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from "./reducer/store.js";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
      <App />
    <ToastContainer position="top-right" autoClose={3000} />
  </Provider>,
  </StrictMode>,
)
