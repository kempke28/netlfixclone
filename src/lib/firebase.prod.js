import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


import {seedDatabase} from "../seed";

//firebase configuration

const config = {
    apiKey: "AIzaSyAxMCbl9LmyjCVXGW8Yjc5JX5m9p-Uyaqs",
    authDomain: "netflix-clone-c764c.firebaseapp.com",
    projectId: "netflix-clone-c764c",
    storageBucket: "netflix-clone-c764c.appspot.com",
    messagingSenderId: "1037413364551",
    appId: "1:1037413364551:web:7f1a65be73d97cfa4a9262"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export default firebase;