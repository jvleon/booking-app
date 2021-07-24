import firebase from "firebase/app"
import "firebase/database"

var firebaseConfig = {
  apiKey: "AIzaSyAwYs6tII9gSZQLBNPksEgyGCJSalz_1t8",
  authDomain: "prueba-2a48a.firebaseapp.com",
  databaseURL: "https://prueba-2a48a.firebaseio.com",
  projectId: "prueba-2a48a",
  storageBucket: "prueba-2a48a.appspot.com",
  messagingSenderId: "30871383998",
  appId: "1:30871383998:web:fa98cd8b628f7cab6a93ef"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const DB = firebase.database()

// let cities = DB.ref('/')

export default DB

