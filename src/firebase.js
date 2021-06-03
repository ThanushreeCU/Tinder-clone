import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAl0a4jtFWIbqW7Bb-dRITMOcwBc2_vPRI",
  authDomain: "tinder-clone-51daf.firebaseapp.com",
  projectId: "tinder-clone-51daf",
  storageBucket: "tinder-clone-51daf.appspot.com",
  messagingSenderId: "82904609878",
  appId: "1:82904609878:web:9a9da8106bdaff906e37f7",
  measurementId: "G-V1MHKQF1EE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
