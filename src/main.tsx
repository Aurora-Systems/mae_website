import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Site from './Site.tsx'
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Site />
  </StrictMode>,
)
