import firebase from "firebase/app";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import firebaseConfig from './firebase.config';
import "firebase/firestore";

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
// console.log(db);


export default firestore;