import firebase from 'firebase/app';
import 'firebase/firestore';

var config = {
  apiKey: "AIzaSyDWQJQOPoKWSl5GrP_j2qKdRW4geyr2NEk",
  authDomain: "fav-foods-test.firebaseapp.com",
  databaseURL: "https://fav-foods-test.firebaseio.com",
  projectId: "fav-foods-test",
  storageBucket: "fav-foods-test.appspot.com",
  messagingSenderId: "565431069520"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
