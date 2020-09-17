import  firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7ssO5Sh1Goes85MYRlwX9ysZ-Xu1Rsxw",
    authDomain: "messenger-clone-36b4b.firebaseapp.com",
    databaseURL: "https://messenger-clone-36b4b.firebaseio.com",
    projectId: "messenger-clone-36b4b",
    storageBucket: "messenger-clone-36b4b.appspot.com",
    messagingSenderId: "1059366224127",
    appId: "1:1059366224127:web:61b9c9fdb5a0163e290cca",
    measurementId: "G-CE3VQMN39R"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

export default db;