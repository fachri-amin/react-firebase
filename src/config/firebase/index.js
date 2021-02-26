import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyD3HDN3y4ZFocOcPqsq8B41pvHdSzwb5dc",
    authDomain: "simple-notes-fachri.firebaseapp.com",
    projectId: "simple-notes-fachri",
    storageBucket: "simple-notes-fachri.appspot.com",
    messagingSenderId: "781131431207",
    appId: "1:781131431207:web:37e3f426bce4c28eb4bd02",
    measurementId: "G-GF78VLHVYM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;


// firebase.analytics();
