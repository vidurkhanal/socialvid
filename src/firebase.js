import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBEaurfyXZb1DxNb42d7FNwClHbKOSfrvE",
  authDomain: "socialvid-cffe7.firebaseapp.com",
  databaseURL: "https://socialvid-cffe7.firebaseio.com",
  projectId: "socialvid-cffe7",
  storageBucket: "socialvid-cffe7.appspot.com",
  messagingSenderId: "1071300779954",
  appId: "1:1071300779954:web:17955d595bc6c77cd94eab",
  measurementId: "G-8NSF24Q8Y7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export const auth = firebase.auth();

export default db;
