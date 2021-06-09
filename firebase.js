import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDkXTBMitkhodfz36I0R39qn_IpfsRtTw8",
    authDomain: "next-5f63c.firebaseapp.com",
    projectId: "next-5f63c",
    storageBucket: "next-5f63c.appspot.com",
    messagingSenderId: "988448311448",
    appId: "1:988448311448:web:8b2b683d186350a59a28ed",
    measurementId: "G-0WRTV712EP"
  };

  const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;