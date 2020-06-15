import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBgVhtVXFaeyqqVoYzXSF4L_anUCia6lTQ",
  authDomain: "job-portal-a58a4.firebaseapp.com",
  databaseURL: "https://job-portal-a58a4.firebaseio.com",
  projectId: "job-portal-a58a4",
  storageBucket: "job-portal-a58a4.appspot.com",
  messagingSenderId: "845073328824",
  appId: "1:845073328824:web:383ebc731e4c690f1c624d",
  measurementId: "G-1YZZ53B0LZ"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();