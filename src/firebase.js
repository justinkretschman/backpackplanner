import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAbyznhjI_UAbo8CIjcqEP-GYjfQxtCtL4",
  authDomain: "peeoutdoors.firebaseapp.com",
  projectId: "peeoutdoors",
  };
firebase.initializeApp(config);

export default firebase;