import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { PageDataProvider } from './context/pageData.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageDataProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PageDataProvider>
  </StrictMode>,
)
