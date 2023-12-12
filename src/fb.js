import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from "firebase/firestore";

export const app = firebase.initializeApp({
    "projectId": "planazo-web",
    "appId": "1:76908027131:web:072afc3457a2457d89e45e",
    "storageBucket": "planazo-web.appspot.com",
    "apiKey": "AIzaSyDHqKtMJJea-DT1pUQxikPjSKuEkzPpoCY",
    "authDomain": "planazo-web.firebaseapp.com",
    "messagingSenderId": "76908027131"
});

export const db = getFirestore(app);