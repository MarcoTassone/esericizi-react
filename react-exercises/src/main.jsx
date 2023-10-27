import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { SWRConfig } from 'swr'

const fetcher = (url) => fetch(url).then((response) => response.json())

ReactDOM.createRoot(document.getElementById('root')).render(
  <SWRConfig value={{ fetcher }}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </SWRConfig>
)
