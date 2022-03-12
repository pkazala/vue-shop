import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBsq_iL98bXkLj_1z7nza-mb3t66dnlFUM",
    authDomain: "vue-shop-78347.firebaseapp.com",
    projectId: "vue-shop-78347",
    storageBucket: "vue-shop-78347.appspot.com",
    messagingSenderId: "932696587137",
    appId: "1:932696587137:web:3043c4289fde0c86e18680",
    measurementId: "G-VGRRKS5F7N"
  };
  
  const db = initializeApp(firebaseConfig);

export { db };