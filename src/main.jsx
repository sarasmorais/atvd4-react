import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CardAnime from './components/CardAnime.jsx'
import "./css/style.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardAnime />
  </StrictMode>,
)
