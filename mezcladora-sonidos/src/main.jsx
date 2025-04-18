import React from 'react';
import ReactDOM from 'react-dom/client';
import Mezcladora from './mezcladora';
import './index.css'; // <---- Aquí importa el CSS con Tailwind

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Mezcladora />
  </React.StrictMode>
);
