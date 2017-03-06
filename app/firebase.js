import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAcd60mgT_lxbD5AbIYCcKezBy7JV6TCdo",
  authDomain: "abakus-jubileum.firebaseapp.com",
  databaseURL: "https://abakus-jubileum.firebaseio.com",
  storageBucket: "abakus-jubileum.appspot.com"
});

export default {

  getRef() {
    return firebaseApp.database().ref();
  }
}
