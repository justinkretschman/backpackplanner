import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAbyznhjI_UAbo8CIjcqEP-GYjfQxtCtL4",
  authDomain: "peeoutdoors.firebaseapp.com",
  projectId: "peeoutdoors",
  storageBucket: "peeoutdoors.appspot.com",
  messagingSenderId: "967116705317",
  appId: "1:967116705317:web:3bf644f7f65b24446639cc",
  measurementId: "G-PBXFJMYCL7",
  };
firebase.initializeApp(config);

export default firebase;