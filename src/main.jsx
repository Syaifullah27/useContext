import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthContextProvider } from './Context/AuthContext.jsx'
import {  MenuContextProvider } from './Context/Menu.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <MenuContextProvider>
        <App />
      </MenuContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
