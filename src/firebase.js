import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAbyznhjI_UAbo8CIjcqEP-GYjfQxtCtL4",
  authDomain: "peeoutdoors.firebaseapp.com",
  projectId: "peeoutdoors",
  storageBucket: "peeoutdoors.appspot.com",
  messagingSenderId: "967116705317",
  appId: "1:967116705317:web:3bf644f7f65b24446639cc",
<<<<<<< HEAD
  measurementId: "G-PBXFJMYCL7"
})
=======
  measurementId: "G-PBXFJMYCL7",
  };
firebase.initializeApp(config);
>>>>>>> e68c7c52d82bb173275d9c28fd283ca69ca1f0af

export const auth = app.auth()
export default app
