
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { ContextProvider } from './context/ContextProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextProvider>
        <App />
    </ContextProvider>
)
