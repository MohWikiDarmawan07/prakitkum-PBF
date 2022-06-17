import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyANZ6QXmPV9U7NK43tNjWiC7A_3KlTflvs",
    authDomain: "modul11-baf81.firebaseapp.com",
    projectId: "modul11-baf81",
    storageBucket: "modul11-baf81.appspot.com",
    messagingSenderId: "909058742624",
    appId: "1:909058742624:web:456775318b6a636c862605",
    measurementId: "G-ZSWH5WHECV"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;