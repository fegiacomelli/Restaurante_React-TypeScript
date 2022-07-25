import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './componets/button';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div>Giacomelli's</div>
    <Button></Button>
  </React.StrictMode>
);

