import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCuRwIJmwAqdS0KAd7Ii7Ey3GbNAOiw3sY",
  authDomain: "netflix-8785b.firebaseapp.com",
  projectId: "netflix-8785b",
  storageBucket: "netflix-8785b.appspot.com",
  messagingSenderId: "924324377255",
  appId: "1:924324377255:web:2cc96ed9ee042755e72182"
};
//initialize the app
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;
