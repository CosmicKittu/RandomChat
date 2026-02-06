import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import RootLayout from './layout/rootlayout.tsx'

createRoot(document.getElementById('root')!).render(
  <RootLayout>
  <StrictMode>
    <App />
  </StrictMode>,
  </RootLayout>
)
