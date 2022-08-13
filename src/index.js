import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import App from './App';
import {store} from './store'
import { Provider } from 'react-redux'
import  Expenses  from './routes/expenses';
import  Invoices  from './routes/invoices';
import Invoice from './routes/invoice';
import { Finder } from './finder'
import { CookieProvider } from 'react-cookie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      
    <BrowserRouter>
    <Routes >
      <Route path="/" element={<App />} >
        <Route path="finder" element={<Finder />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/invoices" element={<Invoices />} >
          <Route path=":invoiceId" element={<Invoice />} />
          </Route>
        <Route 
          path="*"
          element={
            <main style={{ padding: "1rem"}}>
              <p>There's nothing here.</p>
            </main>
          }
        />
      </Route>
    </Routes>
    </BrowserRouter>
   
    </Provider>
    
  </React.StrictMode>
);

