import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAs9TBekiBSHMj1hLGOAL3gku_3jHkODfA",
  authDomain: "reels-2def6.firebaseapp.com",
  projectId: "reels-2def6",
  storageBucket: "reels-2def6.appspot.com",
  messagingSenderId: "299989184620",
  appId: "1:299989184620:web:ea72dc58a1ce871a416849"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth=firebase.auth()
const firestore = firebase.firestore()
export const database={
    users:firestore.collection('users')
}
export const storage=firebase.storage()