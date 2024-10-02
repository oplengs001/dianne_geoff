import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAyj_U5JSRmAMrjoqRWimr196WEfF8i3l8",
    authDomain: "weddinggeoffanddianne.firebaseapp.com",
    projectId: "weddinggeoffanddianne",
    storageBucket: "weddinggeoffanddianne.appspot.com",
    messagingSenderId: "785655023692",
    appId: "1:785655023692:web:f7116f1e88f324f7348ce9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
