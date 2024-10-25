import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // This should work if App.jsx is in the same src folder
import './index.css';       // Ensure index.css is in the same src folder

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
