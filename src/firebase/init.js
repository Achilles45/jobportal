import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDpMKds6Oan01O90BHouwPbN_p6Cqy1t1U",
    authDomain: "job-portal-3ee65.firebaseapp.com",
    databaseURL: "https://job-portal-3ee65.firebaseio.com",
    projectId: "job-portal-3ee65",
    storageBucket: "job-portal-3ee65.appspot.com",
    messagingSenderId: "461981130073",
    appId: "1:461981130073:web:75387071ceb94c0d3d0048",
    measurementId: "G-CN7FPBHQLM"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();