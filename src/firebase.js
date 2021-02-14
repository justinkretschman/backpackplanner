import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAbyznhjI_UAbo8CIjcqEP-GYjfQxtCtL4",
  authDomain: "peeoutdoors.firebaseapp.com",
  projectId: "peeoutdoors",
  storageBucket: "peeoutdoors.appspot.com",
  messagingSenderId: "967116705317",
  appId: "1:967116705317:web:3bf644f7f65b24446639cc",
  measurementId: "G-PBXFJMYCL7"
})

export const auth = app.auth()
export default app
