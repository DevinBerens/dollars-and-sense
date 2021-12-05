import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'app.js';
import 'app.css';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAq_r21xpi1MD313DAvv_fXIuQkb7pEvOM',
  authDomain: 'dollars-and-sense-1f318.firebaseapp.com',
  projectId: 'dollars-and-sense-1f318',
  storageBucket: 'dollars-and-sense-1f318.appspot.com',
  messagingSenderId: '499269213315',
  appId: '1:499269213315:web:e9d0c8e10ba9e79df24fb6'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

ReactDOM.render(
  <BrowserRouter>
    <App db={db} />
  </BrowserRouter>,
  document.getElementById('root')
);
