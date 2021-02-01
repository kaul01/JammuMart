import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp({
  apiKey: "AIzaSyB5P7BEhELBK9uFZq_OJY6JLCKXeOWywlQ",
  authDomain: "jammumart-e6baa.firebaseapp.com",
  projectId: "jammumart-e6baa",
  storageBucket: "jammumart-e6baa.appspot.com",
  messagingSenderId: "586362148293",
  appId: "1:586362148293:web:f771f19a3a2fa42563e7ac",
  measurementId: "G-GE1MPF1J6L"
  })

  const auth = firebase.auth();
  const db = firebase.firestore();

  export {db , auth};
