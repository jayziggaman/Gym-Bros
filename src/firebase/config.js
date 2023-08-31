import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { collection, getFirestore, orderBy, query } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDoBcI5PsK4Vbp-yzZgkvlwOX5wijcBU_c",
  authDomain: "gym-bros-904b2.firebaseapp.com",
  projectId: "gym-bros-904b2",
  storageBucket: "gym-bros-904b2.appspot.com",
  messagingSenderId: "387049002124",
  appId: "1:387049002124:web:20132922f29ead20a5d7a9",
  measurementId: "G-9L5KYHXS5W"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getFirestore(app)
export const articlesRef = collection(database, 'articles')
export const queryy = query( articlesRef, orderBy('createdAt', 'desc') )