import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { NextUIProvider } from '@nextui-org/react'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserContext from './context/UserContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <BrowserRouter>
      <NextUIProvider>

        <UserContext>

          <App />
          <ToastContainer />

        </UserContext>
      </NextUIProvider>
    </BrowserRouter>
  </div>

)
