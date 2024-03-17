import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import MyRouter from './router/MyRouter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyRouter/>
  </React.StrictMode>,
)
