import firebase from "firebase"
import "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTJ66AvhfI7iW9VRz3BNkvSVte1ma9H6w",
  authDomain: "vue-cli-twitter.firebaseapp.com",
  projectId: "vue-cli-twitter",
  storageBucket: "vue-cli-twitter.appspot.com",
  messagingSenderId: "212977285345",
  appId: "1:212977285345:web:088bc49de9e4d2851bdfa0",
  measurementId: "G-YKM01Y40XN",
}

firebase.initializeApp(firebaseConfig)
