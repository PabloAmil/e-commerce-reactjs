import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq0Evrqiss-dXBMJKzw5sw_Au4MTe4LOo",
  authDomain: "coder-react-ecommerce-de0eb.firebaseapp.com",
  projectId: "coder-react-ecommerce-de0eb",
  storageBucket: "coder-react-ecommerce-de0eb.appspot.com",
  messagingSenderId: "13507751385",
  appId: "1:13507751385:web:cfa79bee56d5390c25fdc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
