import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCnuTUdv6TmKx77bMLG_2kilp3JpMMBJDg",
    authDomain: "ecommerce-2b06b.firebaseapp.com",
    projectId: "ecommerce-2b06b",
    storageBucket: "ecommerce-2b06b.appspot.com",
    messagingSenderId: "909409037423",
    appId: "1:909409037423:web:d6743692a4d1faf415f19a",
    measurementId: "G-79B4V2DQNS"
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;