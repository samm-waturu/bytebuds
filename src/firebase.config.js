// Import the functions you need from the SDKs you need
import {getApps, initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getStorage} from "@firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhUM0PWDKN3sAWj29cxFuPqa4UEzG5G6c",
    authDomain: "bytebuds-io.firebaseapp.com",
    projectId: "bytebuds-io",
    storageBucket: "bytebuds-io.appspot.com",
    messagingSenderId: "358436445422",
    appId: "1:358436445422:web:cd2163121243eafdeba7ff",
    measurementId: "G-YNM4W3PNYR"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage}