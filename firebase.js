import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = {
    apiKey: "AIzaSyBDU_tP2ZVJOFRXMdhdu4w9-cEnsP-3cKQ",
    authDomain: "chat-app-5d05d.firebaseapp.com",
    projectId: "chat-app-5d05d",
    storageBucket: "chat-app-5d05d.appspot.com",
    messagingSenderId: "448294000821",
    appId: "1:448294000821:web:e0690cffa3a353453a86fc"
}

const app = initializeApp(firebaseApp);

const auth = getAuth(app);

const db = getFirestore(app);

export { app, auth, db }