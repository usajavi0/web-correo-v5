import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Este código busca el <div id="root"> en tu index.html
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Y aquí, renderiza tu aplicación completa dentro de ese div.
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
