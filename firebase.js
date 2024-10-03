import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCAUCKt933Pj81l9IrkPv2vVoIKXmzEKbU",
    authDomain: "react-notes-f6d8d.firebaseapp.com",
    projectId: "react-notes-f6d8d",
    storageBucket: "react-notes-f6d8d.appspot.com",
    messagingSenderId: "1031543116191",
    appId: "1:1031543116191:web:665e95fa8cea32de922daa"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")