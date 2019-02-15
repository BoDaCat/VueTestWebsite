import firebase from 'firebase/app';
import 'firebase/firestore';

var config = {
  apiKey: "******************",
  authDomain: "fav-foods-test.firebaseapp.com",
  databaseURL: "******************",
  projectId: "fav-foods-test",
  storageBucket: "******************",
  messagingSenderId: "******************"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
