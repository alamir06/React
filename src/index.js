
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import animals,{useAnimals} from './animals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

